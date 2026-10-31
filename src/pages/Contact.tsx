import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export function fieldText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

/** Opens the visitor's own mail client. Does not post the form anywhere. */
export function buildDemoMailto(fields: {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const body = [
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    "",
    fields.message,
  ].join("\n");
  const subject = `Demo request from ${fields.name} at ${fields.company}`;
  return `mailto:hello@praxisgb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = buildDemoMailto({
      name: fieldText(data.get("name")),
      company: fieldText(data.get("company")),
      email: fieldText(data.get("email")),
      phone: fieldText(data.get("phone")),
      message: fieldText(data.get("message")),
    });
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-blue-500 mb-3">Contact</p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-5">Let’s architect your next safe, efficient operation.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Our product experts are ready to run a cost/benefit pilot and deliver a rapid PoC plan.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#f8f8fb] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Email us at <a href="mailto:hello@praxisgb.com" className="text-blue-500 hover:text-blue-600">hello@praxisgb.com</a> or call <a href="tel:+447542315784" className="text-blue-500 hover:text-blue-600">+44 7542 315784</a>.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Manchester, England</li>
              <li>Live support window: Mon-Fri 08:30-18:00 GMT</li>
              <li>Typical reply time: 4 hours</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-black/10 p-8">
            {submitted && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-800">
                Your email client should have opened with a pre-filled message. If not, email us directly at <a href="mailto:hello@praxisgb.com" className="underline">hello@praxisgb.com</a>.
              </div>
            )}
            <label className="block">
              <span className="text-sm font-medium text-foreground">Name</span>
              <input type="text" name="name" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" placeholder="Your name" required />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Company</span>
              <input type="text" name="company" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" placeholder="Company" required />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Email</span>
              <input type="email" name="email" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" placeholder="email@company.com" required />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Phone</span>
              <input type="tel" name="phone" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2" placeholder="+44 ..." />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Message</span>
              <textarea name="message" className="mt-1 w-full rounded-xl border border-black/10 px-3 py-2 min-h-[140px]" placeholder="Tell us about your operations and goals" required></textarea>
            </label>
            <button type="submit" className="w-full rounded-full bg-black text-white py-3 font-medium hover:bg-black/80 transition">
              Request a demo
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-[#f8f8fb]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-3">Not ready yet?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-5">
            Book a scheduled 15-minute discovery call to validate fit before you commit to a pilot.
          </p>
          <a href="mailto:hello@praxisgb.com" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-black/10 bg-white hover:bg-gray-100">
            Book discovery call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
