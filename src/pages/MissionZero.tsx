import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";

const JOIN_MAILTO = "mailto:hello@praxisgb.com?subject=Join%20the%20mission%20early";

export default function MissionZero() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main>
        <section className="flex min-h-screen flex-col justify-center px-5 pb-[16vh] pt-28 md:px-7" aria-labelledby="hero-line">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="mb-9 text-[15px] font-normal tracking-[-0.01em] text-[#B0B0B0]">Mission Zero</p>
            <div className="mb-12">
              <img
                src="/mission-zero/wordmark-b-inverted.png"
                alt="MISSION: ZERO"
                width={4482}
                height={358}
                className="hidden h-auto w-full max-w-[920px] md:block"
              />
              <div className="flex flex-col items-start gap-2.5 md:hidden">
                <img
                  src="/mission-zero/wordmark-b-inverted-mission.png"
                  alt=""
                  width={2690}
                  height={338}
                  className="block h-auto w-full"
                />
                <img
                  src="/mission-zero/wordmark-b-inverted-zero.png"
                  alt="MISSION: ZERO"
                  width={1645}
                  height={366}
                  className="block h-auto w-[61.2%]"
                />
              </div>
            </div>
            <h1 id="hero-line" className="max-w-[16em] text-[clamp(32px,5.2vw,68px)] font-semibold leading-[1.08] tracking-[-0.035em]">
              It's our mission to make
              <br />
              every workplace in the world
              <br />
              accident-free.
            </h1>
          </div>
        </section>

        <section className="px-5 py-[18vh] md:px-7" aria-label="Opening">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="max-w-[14em] text-[clamp(32px,5.4vw,72px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              In today's world,
              <br />
              there's no reason for anyone
              <br />
              to go home injured.
            </p>
          </div>
        </section>

        <section className="px-5 py-[22vh] md:px-7" aria-label="Manifesto">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="max-w-[12em] text-[clamp(34px,5.8vw,76px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Our cars drive themselves.
            </p>
          </div>
        </section>

        <section className="px-5 py-[22vh] md:px-7">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="max-w-[12em] text-[clamp(34px,5.8vw,76px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Your phone knows it's you
              <br />
              from a glance
              <br />
              in the dark.
            </p>
          </div>
        </section>

        <section className="px-5 py-[22vh] md:px-7">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="max-w-[12em] text-[clamp(34px,5.8vw,76px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Your maps see the traffic
              <br />
              three streets ahead.
            </p>
          </div>
        </section>

        <section className="px-5 pb-[24vh] pt-[26vh] md:px-7">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="max-w-[13em] text-[clamp(34px,5.8vw,76px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              So why are people still
              <br />
              getting hurt at work?
            </p>
          </div>
        </section>

        <section className="px-5 py-[18vh] md:px-7" aria-label="Belief">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="max-w-[18em] text-[clamp(22px,2.6vw,34px)] font-normal leading-[1.35] tracking-[-0.02em] text-[#D9D9D9]">
              The technology already exists to spot a near-miss the moment it happens (a pedestrian too close to a forklift, a missing hi-vis, someone outside the walkway) and alert someone while there's still time to act.
            </p>
          </div>
        </section>

        <section className="px-5 pb-[14vh] pt-[22vh] md:px-7" aria-label="Close">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="text-[clamp(36px,6.2vw,84px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              No one should
              <br />
              go home injured.
            </p>
            <p className="mt-[0.28em] text-[clamp(36px,6.2vw,84px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Everyone home safe.
            </p>
          </div>
        </section>

        <section className="px-5 py-[12vh] md:px-7" aria-labelledby="sooner-heading">
          <div className="mx-auto w-full max-w-[1080px]">
            <h2 id="sooner-heading" className="max-w-[14em] text-[clamp(32px,4.6vw,64px)] font-semibold leading-[1.08] tracking-[-0.035em]">
              Help us get there sooner.
            </h2>
            <div className="mt-10 max-w-[36em] space-y-6 text-[clamp(18px,1.6vw,22px)] font-normal leading-[1.45] tracking-[-0.015em] text-[#D9D9D9]">
              <p>
                node watches your workplace in real time and flags the near-misses that usually go unseen. Today it runs at 93% accuracy across multiple violation types. The more sites we see, the faster that number rises, and the sooner we all get closer to zero.
              </p>
              <p className="text-white">Join the mission early.</p>
              <p>
                Start with a proof of concept on your site, with no changes to your existing cameras or IT network. Your site helps train better models for everyone, including you.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-[12vh] pt-[10vh] md:px-7" aria-label="Join the mission">
          <div className="mx-auto w-full max-w-[1080px]">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={JOIN_MAILTO}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-medium tracking-[-0.01em] text-black"
              >
                Join the mission
              </a>
              <Link
                to="/node"
                className="border-b border-white/30 pb-0.5 text-[15px] font-normal tracking-[-0.01em] text-white/60"
              >
                Start a proof of concept
              </Link>
            </div>
            <p className="mt-[18px] text-[13px] leading-[1.45] tracking-[-0.01em] text-[#888888]">
              This opens an email to hello@praxisgb.com.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 md:px-7">
        <div className="mx-auto flex w-full max-w-[1080px] flex-wrap items-baseline justify-between gap-4">
          <Link to="/" className="inline-flex flex-col items-end" aria-label="node by Praxis GB">
            <img src="/node-logo-compact.png" alt="" width={2736} height={596} className="block h-7 w-auto" />
            <span className="mt-1.5 text-[10px] font-normal uppercase leading-none tracking-[0.18em] text-[#B0B0B0]">By Praxis GB</span>
          </Link>
          <p className="flex gap-[18px] text-[12px] tracking-[-0.01em] text-[#888888]">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/gdpr">GDPR</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
