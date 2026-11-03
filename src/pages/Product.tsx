import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Cpu, Server, Zap, CheckCircle, ArrowRight } from "lucide-react";

const productFeatures = [
  {
    icon: ShieldCheck,
    title: "Proactive hazard interception",
    description:
      "AI analysis identifies and mitigates risks before they become incidents, with 90% detection accuracy in real operational environments.",
  },
  {
    icon: Cpu,
    title: "Edge-first inference",
    description:
      "On-device processing keeps latency below 100ms and eliminates cloud video transit, ensuring privacy and compliance.",
  },
  {
    icon: Server,
    title: "Standalone deployment",
    description:
      "node is a standalone, self-contained system. It uses its own cameras and its own network, and it is not connected to your IT network or CCTV. Processing stays on site, with no cloud required. No forklift upgrades.",
  },
  {
    icon: Zap,
    title: "Real-time alerts",
    description:
      "Instant notification for near-miss events, forbidden zone breaches, and PPE non-compliance, across all shifts.",
  },
];

export default function Product() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-blue-400 mb-3">node product suite</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-5">
            Safety intelligence-built for logistics teams.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Full-stack risk management with live detection, audit-grade evidence, and behavioural analytics.
            Drive performance improvement and lower risk exposure in one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:hello@praxisgb.com" className="rounded-full bg-white text-black py-3 px-8 font-medium hover:opacity-90 transition">
              Request Demo
            </a>
            <a href="/contact" className="rounded-full border border-white/60 text-white py-3 px-8 font-medium hover:bg-white/10 transition">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8fb]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">Core features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productFeatures.map((feature) => (
              <article key={feature.title} className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 mb-4 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="uppercase text-xs font-semibold tracking-widest text-blue-500 mb-2">Deployment</p>
            <h2 className="text-3xl md:text-4xl font-semibold">A standalone, self-contained system.</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              node uses its own cameras and its own network. It is not connected to your IT network or CCTV. Processing stays on site, with no cloud required.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Own cameras", "Own network", "On-site processing", "No cloud required", "Dashboard portal", "Email alerts"].map((item) => (
              <div key={item} className="rounded-xl border border-black/10 p-4 text-center text-sm font-medium">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8f8fb]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Privacy, security, trust</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Edge-first architecture with data residency in the UK. Video stays on your premises — always.
              </p>
              <ul className="space-y-3">
                {["Edge-first architecture; video stays on-prem.", "Role-based access and audit trail.", "No cloud video processing — ever.", "DPA available on request."]
                  .map((doc) => (
                    <li key={doc} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-1" />
                      {doc}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold mb-4">How node deploys</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>1. Capture from node's own cameras</p>
                <p>2. On-device inference on edge hardware</p>
                <p>3. Event alerts via webhook or email</p>
                <p>4. Clip archive in encrypted local storage</p>
                <p>5. Dashboard for review and incident management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready for a deeper dive?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Speak to our technical team and get a live deployment plan for your site.
          </p>
          <a
            href="mailto:hello@praxisgb.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/80"
          >
            Book a technical walkthrough
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
