import { Gauge, Activity, Workflow, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Process step timing",
    description: "How long each process step takes, by area, not by person.",
  },
  {
    icon: Activity,
    title: "Cycle Time Analysis",
    description: "Detailed breakdowns to identify optimisation opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Bottleneck Detection",
    description: "AI-driven identification and improvement recommendations.",
  },
  {
    icon: Workflow,
    title: "Process Flow Mapping",
    description: "Visualise workflows with heatmaps and flow analysis.",
  },
];

export const IndustrialFutureSection = () => {
  return (
    <section id="industrial-future" className="py-32 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-medium text-blue-500 mb-4">Process insight</p>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Flow and congestion,
            <br />
            not individual performance.
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            The same cameras show where traffic builds up, where routes cross and how long process steps take, so CI teams can fix layout and flow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialFutureSection;
