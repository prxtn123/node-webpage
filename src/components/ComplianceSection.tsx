import { ClipboardCheck, Shield, BarChart3, FileCheck } from "lucide-react";

const complianceFeatures = [
  { icon: ClipboardCheck, label: "Audit Logs", desc: "Complete audit trail" },
  { icon: Shield, label: "Standards", desc: "Evidence-based reporting" },
  { icon: BarChart3, label: "Real-time", desc: "Live trend analysis" },
  { icon: FileCheck, label: "Reports", desc: "Auto-generated" },
];

export const ComplianceSection = () => {
  return (
    <section id="compliance" className="relative py-32 overflow-hidden text-white">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/compliance.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative max-w-[980px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-blue-400 mb-4">Compliance</p>

          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Evidence for audits
            <br />
            <span className="text-white/60">and investigations.</span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed">
            Every event is logged with a clip and timestamp, giving you an audit trail for internal and customer audits and for investigations. It supports your safe systems of work. It does not replace them.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="h-6 w-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-1">{feature.label}</h3>
              <p className="text-sm text-white/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
