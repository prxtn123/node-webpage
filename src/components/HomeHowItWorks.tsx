import { Cpu, Eye, Video, BarChart2 } from "lucide-react";

const steps = [
  {
    label: "01",
    title: "Camera capture",
    description: "Works with your existing RTSP/ONVIF IP cameras. We fit and manage the edge hardware.",
    icon: Eye,
  },
  {
    label: "02",
    title: "On-device intelligence",
    description: "Edge AI evaluates safety events in < 100ms with no video upload.",
    icon: Cpu,
  },
  {
    label: "03",
    title: "Incident enrichment",
    description: "Each event is saved as a short clip with time and event type, ready for an investigation or a toolbox talk.",
    icon: Video,
  },
  {
    label: "04",
    title: "Actionable insights",
    description: "A site-wide safety score and trends by shift and area, for daily huddles, shift handovers and SHEQ reviews.",
    icon: BarChart2,
  },
];

export default function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">How it works</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">4 steps from detection to safer operations</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.label} className="p-6 rounded-3xl border border-black/10 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-blue-500">{step.label}</div>
                <step.icon className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
