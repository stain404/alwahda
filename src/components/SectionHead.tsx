export default function SectionHead({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <div className="mb-10 grid items-end gap-x-12 gap-y-4 md:grid-cols-2">
      <h2 id={id} className="section-title">
        {title}
      </h2>
      <p className="max-w-[46ch] text-muted">{text}</p>
    </div>
  );
}
