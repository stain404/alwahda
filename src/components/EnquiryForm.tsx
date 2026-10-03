"use client";

import { useActionState } from "react";
import { sendEnquiry, type EnquiryState } from "@/app/actions";

const inputClass =
  "w-full rounded-md border-[1.5px] border-[#b9c3cc] bg-white px-3.5 py-3 text-base text-ink focus:border-plum focus:outline-none focus:ring-[3px] focus:ring-gold-soft aria-[invalid=true]:border-[#b3261e]";

function FieldError({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="text-[0.9rem] font-semibold text-[#b3261e]">
      {text}
    </p>
  );
}

export default function EnquiryForm() {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, { status: "idle" });
  const errors = state.fieldErrors ?? {};
  const v = state.values ?? {};

  if (state.status === "sent") {
    return (
      <div role="status" className="grid content-start gap-3 rounded-md bg-white p-[clamp(24px,4vw,36px)] text-ink">
        <h3 className="text-[1.35rem] font-bold [font-stretch:112%]">Enquiry sent</h3>
        <p className="text-muted">Thanks. We’ll call or email you back soon.</p>
      </div>
    );
  }

  return (
    <form
      action={action}
      noValidate
      className="grid content-start gap-4 rounded-md bg-white p-[clamp(24px,4vw,36px)] text-ink"
    >
      <h3 className="text-[1.35rem] font-bold [font-stretch:112%]">Send an enquiry</h3>

      {/* Spam trap: hidden from people and screen readers */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="f-name" className="text-[0.95rem] font-semibold">Your name</label>
        <input id="f-name" name="name" autoComplete="name" defaultValue={v.name} className={inputClass}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} />
        <FieldError id="e-name" text={errors.name} />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="f-business" className="text-[0.95rem] font-semibold">
          Business name <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="f-business" name="business" autoComplete="organization" defaultValue={v.business} className={inputClass} />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="f-phone" className="text-[0.95rem] font-semibold">Phone</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={inputClass}
          aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} />
        <FieldError id="e-phone" text={errors.phone} />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="f-message" className="text-[0.95rem] font-semibold">What do you need?</label>
        <textarea id="f-message" name="message" rows={4} defaultValue={v.message} className={`${inputClass} resize-y`}
          placeholder="For example: 20 cartons of thin fries and 10 kg of mango pulp each week"
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} />
        <FieldError id="e-message" text={errors.message} />
      </div>

      {state.message && (
        <p role="alert" className="font-semibold text-[#b3261e]">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn justify-self-start bg-gold text-plum-deep hover:bg-gold-dark disabled:opacity-70">
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
