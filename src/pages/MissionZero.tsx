import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const JOIN_SUBJECT = "Join Mission Zero";

export const JOIN_CONSENT_STATEMENT =
  "I agree that PRAXISGB LIMITED (trading as node by Praxis GB) may email me updates about Mission Zero and occasional news about node. I can unsubscribe at any time.";

export const JOIN_OPENED_MESSAGE =
  "Your email app should have opened. Send that email to join, and we'll reply to confirm.";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function canSubmitJoin(fields: {
  name: string;
  email: string;
  company: string;
  consent: boolean;
}): boolean {
  return (
    fields.name.trim().length > 0 &&
    fields.company.trim().length > 0 &&
    EMAIL_PATTERN.test(fields.email.trim()) &&
    fields.consent
  );
}

/** Opens the visitor's own mail client. Does not post the form anywhere. */
export function buildJoinMailto(fields: {
  name: string;
  email: string;
  company: string;
  role: string;
}): string {
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company: ${fields.company}`,
    `Role: ${fields.role}`,
    "",
    JOIN_CONSENT_STATEMENT,
  ].join("\n");
  return `mailto:hello@praxisgb.com?subject=${encodeURIComponent(JOIN_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

const points = [
  {
    title: "Computer vision, built with the University of Manchester.",
    body: "node is computer vision for warehouse and logistics safety, built in partnership with the University of Manchester.",
  },
  {
    title: "A live safety score, flagged before accidents happen.",
    body: "The score is built from common violations such as phone use, MHE speeding, climbing, poor lifting and walkway adherence. Each site can customise what counts.",
  },
  {
    title: "Insights go to managers, not employees.",
    body: "Managers and operators see what is happening, so management can fix root causes rather than blaming colleagues.",
  },
  {
    title: "We watch the violations, not the people.",
    body: "Faces and people are blurred automatically for GDPR.",
  },
  {
    title: "The customer needs nothing.",
    body: "node runs on its own secure private network, separate from the site's IT.",
  },
];

function focusJoinForm() {
  document.getElementById("join")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const name = document.getElementById("join-name");
  if (name instanceof HTMLInputElement) {
    name.focus({ preventScroll: true });
  }
}

export default function MissionZero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [consent, setConsent] = useState(false);
  const [openedHref, setOpenedHref] = useState<string | null>(null);

  const ready = canSubmitJoin({ name, email, company, consent });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmitJoin({ name, email, company, consent })) return;
    const href = buildJoinMailto({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      role: role.trim(),
    });
    window.location.href = href;
    setOpenedHref(href);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <NavBar />

      <section className="bg-black text-white" aria-labelledby="hero-mark">
        <div className="mx-auto max-w-[980px] px-6 pb-20 pt-24 md:pb-32 md:pt-32">
          <p className="mb-8 flex items-center gap-3 font-michroma text-[12px] uppercase tracking-[0.26em] text-[#B0B0B0]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#94E2CC]" aria-hidden="true" />
            node by Praxis GB
          </p>
          <h1 id="hero-mark" className="w-full max-w-[860px]">
            <img
              src="/mission-zero/wordmark-b-inverted-mission.png"
              alt="MISSION:"
              width={2690}
              height={338}
              className="block h-auto w-full"
            />
            <img
              src="/mission-zero/wordmark-b-inverted-zero.png"
              alt="ZERO"
              width={1645}
              height={366}
              className="mt-1 block h-auto w-[61.1524%]"
            />
          </h1>
          <p className="mt-9 max-w-[34em] text-[18px] font-normal leading-[1.4] tracking-[-0.015em] text-[#D9D9D9] md:text-[24px]">
            Accident-free workplaces, by cutting the accident frequency rate.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-medium tracking-[-0.01em] text-black transition-colors hover:bg-white/90"
            >
              Join the mission
            </a>
            <a
              href="#how"
              className="text-[15px] tracking-[-0.01em] text-white/70 transition-colors hover:text-white"
            >
              How we get there
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28" aria-labelledby="aim-title">
        <div className="mx-auto max-w-[980px] px-6">
          <p className="mb-5 font-michroma text-[11px] uppercase tracking-[0.22em] text-[#888888]">
            What we're aiming for
          </p>
          <h2 id="aim-title" className="mb-6 text-[clamp(32px,4.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.03em] text-black">
            Accident-free workplaces.
          </h2>
          <p className="max-w-[34em] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#444444] md:text-[20px]">
            Mission Zero means accident-free workplaces, reached by cutting the accident frequency rate (AFR).
          </p>
          <p className="mt-4 max-w-[34em] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#444444] md:text-[20px]">
            That is the aim. Everything node is built to do points at it.
          </p>
        </div>
      </section>

      <section id="how" className="scroll-mt-16 bg-white pb-20 md:pb-28" aria-labelledby="how-title">
        <div className="mx-auto max-w-[980px] px-6">
          <p className="mb-5 font-michroma text-[11px] uppercase tracking-[0.22em] text-[#888888]">
            How we get there
          </p>
          <h2 id="how-title" className="mb-8 text-[clamp(32px,4.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.03em] text-black">
            Built to cut the AFR, without watching people.
          </h2>
          <div>
            {points.map((point) => (
              <div
                key={point.title}
                className="grid gap-2.5 border-t border-black/10 py-7 last:border-b md:grid-cols-[1fr_1.15fr] md:gap-8 md:py-9"
              >
                <h3 className="text-[20px] font-semibold leading-[1.25] tracking-[-0.025em] text-black md:text-[22px]">
                  {point.title}
                </h3>
                <p className="text-[16px] leading-[1.5] tracking-[-0.01em] text-[#444444] md:text-[17px]">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="scroll-mt-16 bg-[#f5f5f7] py-20 md:py-28" aria-labelledby="join-title">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="mb-10 max-w-[36em]">
            <p className="mb-5 font-michroma text-[11px] uppercase tracking-[0.22em] text-[#888888]">
              Join the mission
            </p>
            <h2 id="join-title" className="mb-6 text-[clamp(32px,4.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.03em] text-black">
              Follow along.
            </h2>
            <p className="text-[18px] leading-[1.5] tracking-[-0.015em] text-[#444444] md:text-[20px]">
              Sign up for occasional updates on Mission Zero and how node is being built.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-labelledby="join-title"
            className="max-w-[560px] rounded-3xl bg-white px-6 pb-6 pt-7 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.05)] md:px-10 md:pb-8 md:pt-10"
          >
            {openedHref && (
              <div role="status" className="mb-5 rounded-xl border border-black/10 bg-[#f5f5f7] p-4 text-sm leading-relaxed text-[#1A1A1A]">
                <p>{JOIN_OPENED_MESSAGE}</p>
                <a href={openedHref} className="mt-2 inline-block underline underline-offset-2">
                  Open the email
                </a>
              </div>
            )}

            <label className="mb-4 block" htmlFor="join-name">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.01em] text-[#1A1A1A]">Name</span>
              <input
                id="join-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-[#f5f5f7] px-3.5 text-base text-black outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="mb-4 block" htmlFor="join-email">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.01em] text-[#1A1A1A]">Email</span>
              <input
                id="join-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-[#f5f5f7] px-3.5 text-base text-black outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="mb-4 block" htmlFor="join-company">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.01em] text-[#1A1A1A]">Company</span>
              <input
                id="join-company"
                name="company"
                type="text"
                autoComplete="organization"
                required
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-[#f5f5f7] px-3.5 text-base text-black outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="mb-4 block" htmlFor="join-role">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.01em] text-[#1A1A1A]">Role (optional)</span>
              <input
                id="join-role"
                name="role"
                type="text"
                autoComplete="organization-title"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-[#f5f5f7] px-3.5 text-base text-black outline-none focus:ring-2 focus:ring-black"
              />
            </label>

            <div className="mb-5 mt-2 flex items-start gap-3">
              <input
                id="join-consent"
                name="consent"
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-[3px] h-[18px] w-[18px] shrink-0 accent-black"
              />
              <label htmlFor="join-consent" className="text-[13px] leading-[1.45] tracking-[-0.01em] text-[#444444]">
                {JOIN_CONSENT_STATEMENT}
              </label>
            </div>

            <button
              type="submit"
              disabled={!ready}
              className="h-12 w-full rounded-full bg-black text-[15px] font-medium tracking-[-0.01em] text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Join the mission
            </button>
            <p className="mt-4 text-[12px] leading-[1.5] text-[#666666]">
              We will only use your details for the updates you asked for. See our{" "}
              <Link to="/privacy" className="text-[#1A1A1A] underline underline-offset-2">
                privacy policy
              </Link>
              . Privacy questions can be sent to{" "}
              <a href="mailto:privacy@praxisgb.com" className="text-[#1A1A1A] underline underline-offset-2">
                privacy@praxisgb.com
              </a>
              .
            </p>
          </form>
        </div>
      </section>

      <section className="bg-[#f5f5f7] px-6 pb-24 pt-2 md:pb-28" aria-label="Closing">
        <div className="mx-auto max-w-[28em] text-center">
          <p className="mb-5 text-[28px] font-semibold tracking-[-0.03em] text-black">That's the aim. Join us.</p>
          <button
            type="button"
            onClick={focusJoinForm}
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors hover:bg-black/80"
          >
            Join the mission
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
