export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Global distribution center",
      outcome: "45% reduction in near misses in 12 weeks",
      metrics: ["23% fewer unsafe zone entries", "+22% PPE compliance", "ROI in 7 months"],
    },
    {
      title: "Cold chain logistics hub",
      outcome: "32% lower incident investigation time",
      metrics: ["Audits completed 3x faster", "100% evidence traceability", "Automation of manual reports"],
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8fb]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Case studies</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Measured outcomes, not promises</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.title} className="apple-card p-6 hover:shadow-lg transition">
              <div className="mb-4 h-40 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">Photo placeholder</div>
              <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-foreground/70 mb-4 font-medium">{caseStudy.outcome}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {caseStudy.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
