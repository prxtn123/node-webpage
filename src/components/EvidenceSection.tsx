import { FileVideo, Search, GitBranch, Lightbulb } from "lucide-react";

const features = [
  {
    icon: FileVideo,
    title: "Annotated clips",
    description: "Each clip marks what was detected and when",
  },
  {
    icon: GitBranch,
    title: "Bowtie Analysis",
    description: "Visual root cause mapping",
  },
  {
    icon: Search,
    title: "Deep Investigation",
    description: "Incident timeline reconstruction",
  },
  {
    icon: Lightbulb,
    title: "AI Recommendations",
    description: "Data-driven suggestions",
  },
];

export const EvidenceSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-blue-500 mb-4">Evidence & Analysis</p>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Root cause tools.
            <br />
            <span className="text-muted-foreground">Continuous improvement.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Clips, timelines and bowtie mapping for root cause analysis, so investigations rest on what happened, not on recollection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#f5f5f7] hover:bg-[#e8e8ed] transition-colors"
            >
              <feature.icon className="h-6 w-6 text-foreground mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
