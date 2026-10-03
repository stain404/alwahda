"use server";

import { company } from "@/lib/content";

export type EnquiryState = {
  status: "idle" | "sent" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "message", string>>;
  values?: Record<string, string>;
};

const LIMITS = { name: 120, business: 160, phone: 40, message: 3000 };

// Sends the enquiry form to the company inbox through Resend (https://resend.com).
// Needs RESEND_API_KEY and ENQUIRY_FROM (a sender on a domain verified in Resend) in .env.local.
export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const get = (k: keyof typeof LIMITS) => String(formData.get(k) ?? "").trim().slice(0, LIMITS[k]);
  const values = { name: get("name"), business: get("business"), phone: get("phone"), message: get("message") };

  // Hidden field that people never fill in; bots usually do.
  if (String(formData.get("website") ?? "") !== "") return { status: "sent" };

  const fieldErrors: EnquiryState["fieldErrors"] = {};
  if (!values.name) fieldErrors.name = "Enter your name.";
  if (!values.phone) fieldErrors.phone = "Enter a phone number so we can call you back.";
  else if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone)) fieldErrors.phone = "Enter a phone number using digits, for example +974 5077 8464.";
  if (!values.message) fieldErrors.message = "Tell us what you need.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM;
  const to = process.env.ENQUIRY_TO || company.email;
  if (!apiKey || !from) {
    console.error("Enquiry form: RESEND_API_KEY or ENQUIRY_FROM is not set.");
    return {
      status: "error",
      message: `The form isn't connected yet. Email ${company.email} or call ${company.phones[0].label}.`,
      values,
    };
  }

  const subject = `Website enquiry from ${values.name}${values.business ? ` (${values.business})` : ""}`;
  const text = [
    values.message,
    "",
    `Name: ${values.name}`,
    values.business && `Business: ${values.business}`,
    `Phone: ${values.phone}`,
  ]
    .filter((l) => l !== "")
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], subject, text }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error("Enquiry form: sending failed.", err);
    return {
      status: "error",
      message: `Your enquiry couldn't be sent. Try again, or email ${company.email}.`,
      values,
    };
  }

  return { status: "sent" };
}
