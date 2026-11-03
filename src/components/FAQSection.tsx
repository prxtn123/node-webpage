import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can node be installed on new sites?",
    answer: "Most sites are live within 2-4 weeks from contract signature, including pilot tuning."
  },
  {
    question: "Does node use site cameras or site CCTV?",
    answer: "No. node is a standalone, self-contained system. It uses its own cameras and its own network, and it is not connected to your IT network or CCTV."
  },
  {
    question: "What data residency guarantees do you provide?",
    answer: "All video processing is on-prem. Metadata and incident logs are retained in your specified region (UK/EU/US) and we provide a DPA with SCCs."
  },
  {
    question: "Does node connect to our IT network or CCTV?",
    answer: "No. node runs off your systems, on its own network. It is not connected to your IT network or CCTV, and no cloud is required."
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-500">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Questions operations leaders ask first</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="group border rounded-2xl border-black/10">
              <AccordionTrigger className="px-5 py-4 text-left">{faq.question}</AccordionTrigger>
              {/* Answers stay in the HTML while collapsed so non-JS crawlers can read them. */}
              <div className="h-0 overflow-hidden px-5 text-sm text-muted-foreground group-data-[state=open]:h-auto group-data-[state=open]:pb-4">
                {faq.answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
