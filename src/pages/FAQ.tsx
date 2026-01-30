import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does LiveSitter store or transmit images?",
    answer:
      "No. Images are captured and processed entirely on the device. Only numerical counts (adults and children) are transmitted via LoRaWAN. Images are immediately discarded after processing and never leave the classroom.",
  },
  {
    question: "How accurate are the counts?",
    answer:
      "LiveSitter's edge AI achieves high accuracy in typical classroom environments. During your pilot, we calibrate for your specific room layouts and lighting conditions. Most customers see 95%+ accuracy after initial calibration.",
  },
  {
    question: "How is location handled without GPS?",
    answer:
      "Each LiveSitter Mini device is assigned to a specific room during installation. Location is determined by device ID, not GPS or geolocation. This approach is simpler, more reliable indoors, and more privacy-friendly.",
  },
  {
    question: "What happens if LoRaWAN coverage is weak?",
    answer:
      "LoRaWAN is designed for excellent indoor penetration. In rare cases where coverage is insufficient, we can add a small, inexpensive gateway. During the pilot, we assess coverage and address any gaps before go-live.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Each device takes just a few minutes to mount and configure. A typical classroom installation is completed in under 10 minutes. Full site deployment for 4-6 rooms can be done in a single morning.",
  },
  {
    question: "Is this FERPA / privacy friendly?",
    answer:
      "Yes. LiveSitter is designed with privacy as a core principle. No images are stored or transmitted, no facial recognition is used, and no video is recorded. Only aggregate counts leave the device, which do not contain personally identifiable information.",
  },
  {
    question: "Can capture rate be adjusted?",
    answer:
      "Yes. Capture rate is configurable from 1 second to 60 seconds. Most customers use 5-15 second intervals, which provides good visibility while minimizing data transmission and power use.",
  },
  {
    question: "What happens after the pilot?",
    answer:
      "After the pilot, we review results together against the success criteria we defined upfront. If LiveSitter meets your needs, we offer straightforward scaling options. If not, there's no obligation to continue.",
  },
  {
    question: "Do I need to install any special network infrastructure?",
    answer:
      "In most cases, no. LoRaWAN gateways have excellent range and a single gateway often covers an entire facility. If additional coverage is needed, gateways are small, inexpensive, and easy to install.",
  },
  {
    question: "How do I access the dashboard?",
    answer:
      "The LiveSitter dashboard is web-based and accessible from any modern browser. You'll receive login credentials during onboarding. The dashboard works on desktop, tablet, and mobile devices.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-4">FAQ</div>
            <h1 className="text-display mb-6">
              Frequently asked<br />
              questions
            </h1>
            <p className="text-subheadline">
              Clear answers to common questions about LiveSitter, privacy, and deployment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-narrow">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-5 py-0 border-border/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-3 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="text-headline mb-4">Still have questions?</h2>
          <p className="text-subheadline mb-8">
            We're happy to help. Book a demo and we'll walk you through everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a Demo
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/pilot" className="btn-secondary">
              Request a Pilot
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
