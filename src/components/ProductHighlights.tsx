import { Shield, Clock, TrendingUp, BarChart2 } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Risk scoring", description: "Each event is classed by type and severity so the highest risks reach a supervisor first." },
  { icon: Clock, title: "Proximity monitoring", description: "Live zone & distance analytics across all active operations." },
  { icon: TrendingUp, title: "Trend data for CI", description: "Event counts by shift, area and type, ready for a PDCA or DMAIC review." },
  { icon: BarChart2, title: "Automated reporting", description: "Dashboards with gated approvals, secure audit logs, and exportable evidence packs." },
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-white" id="product-highlights">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Product highlights</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Modular capabilities for every warehouse use case</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="p-6 rounded-3xl border border-black/10 hover:bg-[#f8f8fb] transition">
              <div className="mb-4 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
