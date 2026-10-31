import { Users, AlertCircle, Route } from "lucide-react";

const metrics = [
  { icon: Users, label: "MHE and pedestrian", value: "2.5m+", desc: "Alert when a person comes within the set distance of moving MHE" },
  { icon: Route, label: "Path Monitoring", value: "Active", desc: "Walkway deviation alerts" },
  { icon: AlertCircle, label: "Response Time", value: "<100ms", desc: "Instant zone alerts" },
];

export const ProximitySection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div>
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-blue-500 mb-4">Proximity Intelligence</p>

            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Distance,
              <br />
              <span className="text-muted-foreground">not just presence.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              node estimates how close people are to moving equipment and flags off-path movement before it becomes a collision.
            </p>

            {/* Metrics */}
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                      <metric.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">{metric.desc}</div>
                    </div>
                  </div>
                  <div className="text-xl font-semibold text-foreground">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProximitySection;
