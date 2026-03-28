const testimonials = [
  { name: "TBD", role: "TBD", quote: "" },
  { name: "TBD", role: "TBD", quote: "" },
  { name: "TBD", role: "TBD", quote: "" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f8f8fb]" id="testimonials">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-500 uppercase tracking-widest">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Trust signals from forward-thinking leaders</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <blockquote key={`${item.name}-${index}`} className="apple-card p-6 flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-slate-200 mb-4 flex items-center justify-center text-sm text-slate-500">Image</div>
              {item.quote ? (
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">“{item.quote}”</p>
              ) : (
                <div className="h-6 w-40 bg-slate-100 rounded-full mb-4" />
              )}
              <footer className="text-sm font-semibold">{item.name}</footer>
              <p className="text-xs text-muted-foreground">{item.role}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
