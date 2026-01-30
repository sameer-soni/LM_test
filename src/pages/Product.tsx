import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  CheckCircle,
  XCircle,
  Cpu,
  Radio,
  Eye,
  Settings,
  Shield,
  Zap,
} from "lucide-react";

const bestFor = [
  "Classrooms",
  "Activity rooms",
  "Common areas",
  "Sites requiring continuous visibility",
];

const capabilities = [
  { icon: Eye, text: "Continuous adult and child counting" },
  { icon: Settings, text: "Configurable capture rate" },
  { icon: Cpu, text: "On-device inference" },
  { icon: Radio, text: "LoRaWAN backhaul" },
  { icon: Shield, text: "No image storage" },
  { icon: Zap, text: "Low power consumption" },
];

const notList = [
  "Not a camera system",
  "Not facial recognition",
  "Not video recording",
  "Not cloud-dependent",
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="badge-primary mb-4">LiveSitter Mini (Wired)</div>
            <h1 className="text-display mb-6">
              Edge AI counts.<br />
              Built for childcare.
            </h1>
            <p className="text-subheadline mb-8">
              A small, wall-mounted device that uses on-device AI to count adults and 
              children continuously. Privacy-first design with no video storage or streaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pilot" className="btn-primary">
                Request a Pilot
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spec Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Best For */}
            <div className="spec-card">
              <h3 className="spec-card-title">Best For</h3>
              <ul className="spec-list">
                {bestFor.map((item) => (
                  <li key={item} className="spec-item">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Capabilities */}
            <div className="spec-card">
              <h3 className="spec-card-title">Key Capabilities</h3>
              <ul className="spec-list">
                {capabilities.map((item) => (
                  <li key={item.text} className="spec-item">
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What It Is Not */}
            <div className="spec-card bg-muted/30">
              <h3 className="spec-card-title text-muted-foreground">What It Is Not</h3>
              <ul className="spec-list">
                {notList.map((item) => (
                  <li key={item} className="spec-item text-muted-foreground">
                    <XCircle className="h-4 w-4 text-muted-foreground/70 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground/80 border-t border-border pt-4">
                This section builds trust—we're transparent about what LiveSitter is designed for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Technical Specifications</h2>
            <p className="text-subheadline max-w-2xl mx-auto">
              Designed for reliability in childcare environments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-feature">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Power
                    </span>
                    <p className="font-medium">Wired (PoE or USB-C)</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Connectivity
                    </span>
                    <p className="font-medium">LoRaWAN (sub-GHz)</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Processing
                    </span>
                    <p className="font-medium">On-device edge AI</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Data Transmitted
                    </span>
                    <p className="font-medium">Counts only (no images)</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Capture Rate
                    </span>
                    <p className="font-medium">Configurable (1s – 60s intervals)</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Installation
                    </span>
                    <p className="font-medium">Wall-mounted, minutes per device</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="card-feature bg-gradient-to-br from-primary to-primary/90 text-primary-foreground text-center p-10 md:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-primary-foreground">
              Ready to see it in action?
            </h2>
            <p className="text-primary-foreground/90 max-w-lg mx-auto mb-8">
              Request a pilot and we'll set up LiveSitter Mini in your center.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pilot"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary-foreground/90"
              >
                Request a Pilot
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
