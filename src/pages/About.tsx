import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <p className="text-sm font-medium text-blue-500 mb-3">Company</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-5">
            Praxis GB builds computer vision that works.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We design, deploy, and manage edge AI systems for organisations that need
            real-time visual intelligence — without the complexity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Praxis GB was founded in Greater Manchester. We saw that computer vision technology
              was powerful but inaccessible — locked behind enterprise budgets, cloud dependencies,
              and IT complexity. We set out to change that.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we build edge-deployed AI products that run on-site, on our own hardware,
              with no cloud dependency required. We handle the models, the infrastructure, and the
              ongoing management — so our customers can focus on outcomes.
            </p>
          </div>
          <div className="rounded-3xl bg-[#f8f8fb] p-8 apple-card">
            <h3 className="font-semibold mb-4">What we believe</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Computer vision should be practical, affordable, and private. You shouldn't need a
              data science team or a cloud contract to get value from what your cameras already see.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-white shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Approach</p>
                <p className="font-semibold">Edge-first, always.</p>
              </div>
              <div className="p-3 rounded-2xl bg-white shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Values</p>
                <p className="font-semibold">Simple. Private. Effective.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">Our flagship product</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            node is our first product — edge-deployed safety monitoring, currently live in warehouses
            and logistics centres. It demonstrates what Praxis GB does: take a real-world problem,
            build a computer vision solution, and deploy it without cloud dependency.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Edge-deployed", detail: "All processing on-site, no cloud video transit." },
              { label: "Real-time", detail: "Live camera feed analysis with instant alerts." },
              { label: "Managed", detail: "We handle the hardware, models, and maintenance." },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">Leadership</h2>
          <div className="max-w-md mx-auto">
            <div className="apple-card p-6 text-center">
              {/* IMAGE: Professional headshot of Tom Noble, founder */}
              <div className="h-24 w-24 rounded-full bg-black/10 mx-auto mb-4 flex items-center justify-center text-sm text-muted-foreground">
                Photo
              </div>
              <h4 className="font-semibold mb-1">Tom Noble</h4>
              <p className="text-sm text-muted-foreground">Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Based in Greater Manchester</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're a UK company building for UK organisations — and beyond. If you have a problem
            that cameras can see, we'd like to hear about it.
          </p>
          <a
            href="mailto:tom.noble@praxisgb.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-black/85"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
