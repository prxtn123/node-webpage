import { Shield, Target, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "Near misses",
    label: "Detected and logged as they happen",
  },
  {
    icon: Target,
    value: "PPE and walkways",
    label: "Checked on every shift",
  },
  {
    icon: Clock,
    value: "Safety score",
    label: "Site-wide, by shift",
  },
  {
    icon: TrendingUp,
    value: "Alerts",
    label: "Sent to supervisors on site",
  },
];

export const StatsSection = () => {
  return (
    <section id="product" className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Leading indicators for site safety.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most sites judge safety on lagging numbers: RIDDOR reportables, lost-time injuries, first-aid cases. node records the near misses that come before them, so you can act while it is still a near miss.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-muted mx-auto mb-5 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
