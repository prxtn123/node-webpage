import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can node be installed on new sites?",
    answer: "Most sites are live within 2-4 weeks from contract signature, including network readiness audit and pilot tuning."
  },
  {
    question: "Do we need to replace existing cameras?",
    answer: "No. node supports standard RTSP/ONVIF cameras and can also work with new high-res cameras for the highest fidelity risk detection."
  },
  {
    question: "What data residency guarantees do you provide?",
    answer: "All video processing is on-prem. Metadata and incident logs are retained in your specified region (UK/EU/US) and we provide a DPA with SCCs."
  },
  {
    question: "Can node integrate with our existing systems?",
    answer: "node is designed to work alongside your existing infrastructure. Contact us for integration specifics."
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
