import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-foreground">
          Ready to simplify compliance?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto mb-10">
          Join the pilot program and see how LiveSitter Mini can transform your ratio tracking.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/pilot"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-8 py-4 text-base font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary-foreground/90"
          >
            Request a Pilot
            <ChevronRight className="h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
          >
            <Calendar className="h-4 w-4" />
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
