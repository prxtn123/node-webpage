import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, BarChart2, ClipboardCheck } from "lucide-react";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const whatNodeDoes = [
  {
    icon: AlertTriangle,
    title: "Near misses",
    body: "node flags a missing hi-vis vest, a pedestrian outside the walkway or a person too close to moving MHE, and alerts the supervisor while the risk is live.",
  },
  {
    icon: ClipboardCheck,
    title: "Evidence for audits",
    body: "Every event is logged with a clip and timestamp, giving you an audit trail for internal and customer audits and for investigations.",
  },
  {
    icon: BarChart2,
    title: "Safety score",
    body: "A site-wide safety score and trends by shift and area, for daily huddles, shift handovers and SHEQ reviews.",
  },
];

const standalonePoints = [
  "Its own cameras",
  "Its own network",
  "Processing stays on site",
  "No cloud required",
  "Not connected to your IT network or CCTV",
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img
              src="/images/hero-node.jpg"
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 max-w-[980px] mx-auto px-6 pt-20 pb-32 text-center">
            <div className="mb-8">
              <img
                src="/node-logo.png"
                alt=".node. Computer Vision. Built For Operators."
                className="mx-auto h-20 md:h-28 lg:h-36 w-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
              Warehouse safety, seen before it happens.
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
              Praxis GB builds computer vision for warehouse and logistics safety. node is its product.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/node"
                className="inline-flex items-center gap-2 text-xl text-blue-400 hover:text-blue-300 transition-colors"
              >
                See node
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xl text-white/80 hover:text-white transition-colors"
              >
                Request a demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        <section id="what-node-does" className="py-32 bg-white" aria-label="What node does">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium text-blue-500 mb-4">What node does</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                Leading indicators for site safety.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {whatNodeDoes.map((item) => (
                <article key={item.title} className="p-6 rounded-2xl bg-[#f5f5f7]">
                  <item.icon className="h-6 w-6 text-foreground mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="standalone" className="py-32 bg-[#f5f5f7]" aria-label="Why standalone">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-medium text-blue-500 mb-4">Why standalone</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
                A standalone, self-contained system.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                node uses its own cameras and its own network. Processing stays on site, with no cloud required. It is not connected to your IT network or CCTV.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-3">
              {standalonePoints.map((point) => (
                <li
                  key={point}
                  className="px-4 py-2 rounded-full bg-black/5 text-sm font-medium text-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
