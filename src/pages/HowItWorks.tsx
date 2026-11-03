import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Cpu,
  Eye,
  AlertTriangle,
  BarChart2,
  Video,
  WifiOff,
  Lock,
  CheckCircle,
  ArrowRight,
  Zap,
  HardDrive,
  Shield,
} from "lucide-react";

const detectionTypes = [
  {
    icon: Shield,
    title: "Missing PPE",
    description:
      "Detects workers without required personal protective equipment - hard hats, hi-vis vests, gloves, and more.",
  },
  {
    icon: AlertTriangle,
    title: "Proximity Breaches",
    description:
      "Flags unsafe distances between personnel and moving equipment such as forklifts and heavy machinery.",
  },
  {
    icon: Eye,
    title: "Zone Violations",
    description:
      "Monitors restricted and hazardous areas in real time, alerting when unauthorised personnel enter danger zones.",
  },
];

const howItWorksSteps = [
  {
    step: "01",
    icon: Cpu,
    title: "Edge processing on-device",
    description:
      "node runs on NVIDIA Jetson hardware installed at your site. Its own cameras are processed on site, and no footage is sent to the cloud.",
  },
  {
    step: "02",
    icon: Eye,
    title: "Real-time violation detection",
    description:
      "Computer vision models analyse every frame as it happens. When a safety violation is detected, node captures the moment immediately.",
  },
  {
    step: "03",
    icon: Video,
    title: "Clip capture & dashboard review",
    description:
      "A 10-second clip of each incident is uploaded to your dashboard for review, logging, and investigation - with timestamps and violation type.",
  },
  {
    step: "04",
    icon: BarChart2,
    title: "Live safety score",
    description:
      "Throughout the day, node generates a facility-wide safety score. High-risk periods and recurring patterns are surfaced automatically.",
  },
];

const privateFeatures = [
  {
    icon: HardDrive,
    title: "On-device inference",
    description: "All AI processing runs on site, on node's own hardware. Video never leaves your site.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    description: "Detection continues even without an internet connection. No cloud dependency.",
  },
  {
    icon: Lock,
    title: "No API fees",
    description: "Zero per-frame cloud processing costs. One device, running continuously.",
  },
  {
    icon: Zap,
    title: "Zero latency",
    description: "Local inference means detection happens in real time with no round-trip delay.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-white">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-blue-500 mb-4 tracking-wide">
            Edge AI Safety Monitoring
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-semibold text-foreground tracking-tight leading-[1.05] mb-6">
            What is node?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An intelligent safety system for warehouses and manufacturing facilities. node is a standalone, self-contained system with its own cameras and its own network. Processing stays on site, with no cloud required and no cloud costs. No footage leaves the site. It is not connected to your IT network or CCTV.
          </p>
        </div>
      </section>

      {/* One-line summary strip */}
      <section className="py-12 bg-[#f5f5f7] border-y border-black/5">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-semibold text-foreground tracking-tight mb-1">Edge AI</p>
              <p className="text-sm text-muted-foreground">Processing on NVIDIA Jetson</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground tracking-tight mb-1">Real-time</p>
              <p className="text-sm text-muted-foreground">Live camera feed analysis</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground tracking-tight mb-1">Zero cloud</p>
              <p className="text-sm text-muted-foreground">No API fees, no video uploads</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium text-blue-500 mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              From camera to dashboard.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              node is a standalone, self-contained system. It uses its own cameras and its own network for safety monitoring on site. It is not connected to your IT network or CCTV, and no cloud is required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {howItWorksSteps.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-[#f5f5f7] hover:bg-[#ebebf0] transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <step.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1 tracking-widest uppercase">
                      {step.step}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What node detects */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium text-blue-500 mb-4">Detection capabilities</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Violations caught as they happen.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              node monitors your facility for the safety events that matter most, around the clock.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {detectionTypes.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety score callout */}
      <section className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-blue-500 mb-4">Live safety score</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
                A clear picture of risk.
                <br />
                <span className="text-muted-foreground">Every shift, every day.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Throughout the day, node generates a live safety score for your facility. High-risk
                periods and incident patterns are highlighted automatically - giving managers
                objective data instead of end-of-week guesswork.
              </p>
              <ul className="space-y-3">
                {[
                  "Shift-by-shift risk breakdown",
                  "Automated incident logging",
                  "Pattern recognition across time",
                  "No manual audits required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual placeholder */}
            <div className="rounded-3xl bg-[#f5f5f7] p-10 flex flex-col gap-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Facility Safety Score</p>
                <span className="text-xs text-muted-foreground">Today</span>
              </div>
              {/* Score ring mockup */}
              <div className="flex items-center justify-center py-6">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#e5e5ea"
                      strokeWidth="10"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="52"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="326.7"
                      strokeDashoffset="65"
                    />
                  </svg>
                  <div className="text-center z-10">
                    <p className="text-4xl font-semibold text-foreground tracking-tight">82</p>
                    <p className="text-xs text-muted-foreground">/ 100</p>
                  </div>
                </div>
              </div>
              {/* Mini bar chart mockup */}
              <div className="space-y-2">
                {[
                  { label: "Morning shift", value: 88, color: "bg-blue-400" },
                  { label: "Afternoon shift", value: 76, color: "bg-amber-400" },
                  { label: "Evening shift", value: 91, color: "bg-blue-400" },
                ].map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <p className="text-xs text-muted-foreground w-28 flex-shrink-0">{bar.label}</p>
                    <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${bar.color}`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                    <p className="text-xs font-medium text-foreground w-6 text-right">{bar.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & on-device */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium text-blue-500 mb-4">Privacy by design</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Your video never leaves your site.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All inference runs on-device. There are no monthly API fees, no third-party video
              processing, and detection keeps working even without internet access.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {privateFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white hover:shadow-sm transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center mb-4">
                  <feature.icon className="h-4 w-4 text-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Proactive safety monitoring.
            <br />
            <span className="text-muted-foreground">Without the guesswork.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Objective data, automated incident logging, and a clear view of risk across shifts -
            without consultants, manual audits, or cloud costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@praxisgb.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-colors"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
