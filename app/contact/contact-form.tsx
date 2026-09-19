"use client";

import { useState, type FormEvent } from "react";

const projectTypes = [
  "Product / mechanical design",
  "CAD modeling & drawings",
  "FEA / CFD analysis",
  "Prototyping",
  "Full-time role",
  "Something else",
];

const fieldClass =
  "mt-2 w-full rounded-[6px] border border-line bg-page px-4 py-3 text-[14px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink/40 focus:outline-none";

// There is no backend, so the form hands the message to the visitor's own
// email app with everything pre-filled.
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const subject = `${data.get("type")} — ${name}`;
    const body = [
      String(data.get("message")),
      "",
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      data.get("company") ? `Company: ${data.get("company")}` : "",
    ]
      .filter((line, i) => i < 2 || line)
      .join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[10px] border border-line bg-panel p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[13px] font-medium">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium">
          Company <span className="text-muted">(optional)</span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            className={fieldClass}
          />
        </label>
        <label className="block text-[13px] font-medium">
          What can I help with?
          <select name="type" className={fieldClass} defaultValue={projectTypes[0]}>
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-[13px] font-medium">
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about the problem, the timeline and any constraints."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[12px] text-muted" aria-live="polite">
          {sent
            ? `Your email app should open now. If it didn't, write to ${email}.`
            : "Sends from your own email app — nothing is stored on this site."}
        </p>
        <button
          type="submit"
          className="rounded-[5px] bg-ink px-6 py-3 text-[13px] font-semibold text-page transition-colors hover:bg-ink-hover"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
