import { AlertTriangle, Eye, Gauge, Route } from "lucide-react";

const detectionFeatures = [
  { icon: AlertTriangle, label: "No-Vest Detection" },
  { icon: Route, label: "Walkway Deviation" },
  { icon: Gauge, label: "Proximity Alerts" },
  { icon: Eye, label: "Depth-Aware Vision" },
];

export const NearMissSection = () => {
  return (
    <section id="features" className="py-32 bg-[#f5f5f7]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-blue-500 mb-4">Near-Miss Prevention</p>

            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Near misses,
              <br />
              <span className="text-muted-foreground">recorded as they happen.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              node flags a missing hi-vis vest, a pedestrian outside the walkway or a person too close to moving MHE, and alerts the supervisor while the risk is live. Near misses that would go unreported become data you can act on.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {detectionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                >
                  <feature.icon className="h-4 w-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/near-miss.jpg"
              alt="Warehouse environment monitored by computer vision"
              className="h-full w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearMissSection;
