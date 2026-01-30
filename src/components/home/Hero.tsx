import { Link } from "react-router-dom";
import { ChevronRight, Play, Shield, Cpu, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-primary mb-6 animate-fade-up">
            <Cpu className="h-3.5 w-3.5" />
            <span>Edge AI for Childcare</span>
          </div>

          {/* Headline */}
          <h1 className="text-display mb-6 animate-fade-up stagger-1">
            Continuous classroom counts.{" "}
            <span className="text-gradient">Clear compliance.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-subheadline max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            Wall-mounted edge AI device that continuously tracks adult and child counts
            and turns them into compliance dashboards and audit-ready reports.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Link to="/pilot" className="btn-primary text-base px-8 py-4">
              Request a Pilot
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary text-base px-8 py-4">
              <Play className="h-4 w-4" />
              Book a Demo
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-up stagger-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-success" />
              <span>No video storage</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cpu className="h-4 w-4 text-success" />
              <span>On-device inference</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-success" />
              <span>Real-time dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
