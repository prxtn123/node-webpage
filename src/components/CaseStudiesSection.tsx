export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Warehouse safety monitoring",
      outcome: "Live deployment. Results will be published at the end of the measurement period.",
      metrics: ["Near-miss detection and alerting", "Automated evidence capture", "Ongoing. Results to be published."],
      image: "/images/site-warehouse.jpg",
    },
    {
      title: "Logistics centre pilot",
      outcome: "Pilot in progress at a logistics centre.",
      metrics: ["Edge-deployed, no cloud dependency", "Integrated with existing camera infrastructure", "Ongoing. Results to be published."],
      image: "/images/site-logistics.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#f8f8fb]">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Case studies</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Current deployments</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.title} className="apple-card p-6 hover:shadow-lg transition">
              <div className="mb-4 h-40 overflow-hidden rounded-2xl">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
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
