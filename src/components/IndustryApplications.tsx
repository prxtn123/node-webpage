const industries = [
  "E-commerce fulfilment",
  "Cold chain logistics",
  "Manufacturing & assembly",
  "Ports & terminals",
  "Automotive distribution",
  "Pharma warehouses",
];

export default function IndustryApplications() {
  return (
    <section className="bg-white pb-20 pt-0" id="industry-applications">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Industry applications</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Sites where people and MHE share space</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((name) => (
            <div key={name} className="p-5 rounded-2xl border border-black/10 hover:bg-[#f8f8fb] transition">
              <h3 className="font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
