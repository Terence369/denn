import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-foreground/70">Everything you need to know.</p>
      </div>
      <Accordion type="single" collapsible className="mt-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>Are you HIPAA compliant?</AccordionTrigger>
          <AccordionContent>
            We follow privacy-first practices and can integrate HIPAA-aware
            solutions. Compliance specifics vary by region and tools used—let’s
            discuss your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does a project take?</AccordionTrigger>
          <AccordionContent>
            Typical timelines range from 3–6 weeks depending on scope,
            integrations, and content readiness.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Which systems can you integrate?</AccordionTrigger>
          <AccordionContent>
            Popular choices include appointment platforms, CRM/EMR tools,
            payments, analytics, and marketing automation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What support do you offer?</AccordionTrigger>
          <AccordionContent>
            Ongoing support and enhancements are available via flexible care
            plans tailored to your growth stage.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
