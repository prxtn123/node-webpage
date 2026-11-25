import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { CarSketch, PhoneSketch, MapSketch, ForkliftSketch } from "@/components/MissionZeroSketches";

const JOIN_MAILTO = "mailto:hello@praxisgb.com?subject=Join%20the%20mission%20early";

const manifesto = [
  {
    Sketch: CarSketch,
    text: "Our cars drive themselves.",
  },
  {
    Sketch: PhoneSketch,
    text: "Your phone knows it's you from a glance, in the dark.",
  },
  {
    Sketch: MapSketch,
    text: "Your maps see the traffic three streets ahead.",
  },
] as const;

export default function MissionZero() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main>
        <section className="px-5 pb-12 pt-28 md:px-7 md:pb-14 md:pt-[6.5rem]" aria-labelledby="hero-line">
          <div className="mx-auto w-full max-w-[1080px]">
            <p className="mb-4 text-[15px] font-normal tracking-[-0.01em] text-[#B0B0B0]">Mission Zero</p>
            <div className="mb-5 md:mb-6">
              <img
                src="/mission-zero/wordmark-b-inverted.png"
                alt="MISSION: ZERO"
                width={4482}
                height={358}
                className="hidden h-auto w-full max-w-[560px] md:block"
              />
              <div className="flex flex-col items-start gap-2 md:hidden">
                <img
                  src="/mission-zero/wordmark-b-inverted-mission.png"
                  alt=""
                  width={2690}
                  height={338}
                  className="block h-auto w-full max-w-[320px]"
                />
                <img
                  src="/mission-zero/wordmark-b-inverted-zero.png"
                  alt="MISSION: ZERO"
                  width={1645}
                  height={366}
                  className="block h-auto w-[58%] max-w-[196px]"
                />
              </div>
            </div>
            <h1
              id="hero-line"
              className="max-w-[20em] text-[clamp(26px,3.3vw,40px)] font-semibold leading-[1.12] tracking-[-0.035em]"
            >
              It's our mission to make every workplace in the world accident-free.
            </h1>
            <p className="mt-4 max-w-[38em] text-[clamp(17px,1.55vw,20px)] font-normal leading-[1.4] tracking-[-0.02em] text-[#D9D9D9]">
              In today's world, there's no reason for anyone to go home injured.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-3 sm:gap-8">
              {manifesto.map(({ Sketch, text }) => (
                <li key={text} className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <Sketch className="h-16 w-16 shrink-0 text-white sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]" />
                  <p className="text-[clamp(17px,1.6vw,20px)] font-semibold leading-[1.3] tracking-[-0.02em]">{text}</p>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[clamp(22px,2.6vw,32px)] font-semibold leading-[1.15] tracking-[-0.035em] md:mt-8">
              So why are people still getting hurt at work?
            </p>

            <div className="mt-5 flex flex-col items-start gap-6 md:mt-6 md:flex-row md:items-center md:gap-10">
              <p className="max-w-[36em] text-[clamp(17px,1.5vw,20px)] font-normal leading-[1.45] tracking-[-0.02em] text-[#D9D9D9]">
                The technology already exists to spot a near-miss the moment it happens (a pedestrian too close to a forklift, a missing hi-vis, someone outside the walkway) and alert someone while there's still time to act.
              </p>
              <ForkliftSketch className="h-28 w-auto shrink-0 text-white md:h-28" />
            </div>

            <p className="mt-6 text-[clamp(26px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.035em] md:mt-7">
              This technology should keep people safe.
            </p>
            <p className="mt-[0.2em] text-[clamp(26px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.035em]">
              Now it can.
            </p>
          </div>
        </section>

        <section className="px-5 pb-16 pt-4 md:px-7 md:pb-20 md:pt-6" aria-labelledby="sooner-heading">
          <div className="mx-auto w-full max-w-[1080px] border-t border-white/10 pt-10 md:pt-12">
            <h2
              id="sooner-heading"
              className="max-w-[14em] text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.12] tracking-[-0.035em]"
            >
              Help us get there sooner.
            </h2>
            <div className="mt-6 max-w-[36em] space-y-5 text-[clamp(17px,1.45vw,20px)] font-normal leading-[1.45] tracking-[-0.015em] text-[#D9D9D9] md:mt-8">
              <p>
                node watches your workplace in real time and flags the near-misses that usually go unseen. Today it runs at 93% accuracy across multiple violation types. The more sites we see, the faster that number rises, and the sooner we all get closer to zero.
              </p>
              <p className="text-white">Join the mission early.</p>
              <p>
                Start with a proof of concept on your site, with no changes to your existing cameras or IT network. Your site helps train better models for everyone, including you.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 md:mt-10">
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
          <Link to="/" aria-label="node by Praxis GB">
            <img src="/node-lockup-white.svg" alt="" width={2580} height={885} className="block h-16 w-auto md:h-[72px]" />
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
