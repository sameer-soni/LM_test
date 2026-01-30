import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ChevronRight, Camera, Cpu, Radio, BarChart3, Zap, Shield, DollarSign, Building } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Capture",
    description: "Camera captures image at configurable intervals (1-60 seconds).",
    icon: Camera,
  },
  {
    number: 2,
    title: "Infer",
    description: "On-device AI counts adults and children. Image is immediately discarded.",
    icon: Cpu,
  },
  {
    number: 3,
    title: "Transmit",
    description: "Small data payload (just counts) sent via LoRaWAN to gateway.",
    icon: Radio,
  },
  {
    number: 4,
    title: "Analyze",
    description: "Dashboard displays real-time counts, compliance status, and generates reports.",
    icon: BarChart3,
  },
];

const loraWanBenefits = [
  {
    icon: DollarSign,
    title: "Low Cost",
    description: "Minimal infrastructure investment. No complex networking required.",
  },
  {
    icon: Building,
    title: "Reliable Indoors",
    description: "Sub-GHz frequencies penetrate walls and floors better than WiFi.",
  },
  {
    icon: Shield,
    title: "Privacy Preserved",
    description: "Payload is just counts—no images ever leave the device.",
  },
  {
    icon: Zap,
    title: "Low Power",
    description: "Efficient transmission means lower energy costs and longer device life.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-4">How It Works</div>
            <h1 className="text-display mb-6">
              Simple. Private.<br />
              Continuous.
            </h1>
            <p className="text-subheadline">
              From image capture to compliance dashboard in four simple steps.
              All processing happens on-device—your images never leave the classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-border hidden md:block" />

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative flex gap-8">
                    {/* Step number */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="step-number">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="card-feature">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <step.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LoRaWAN */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Why LoRaWAN?</h2>
            <p className="text-subheadline max-w-2xl mx-auto">
              Low-power, long-range wireless technology designed for IoT applications like LiveSitter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loraWanBenefits.map((benefit) => (
              <div key={benefit.title} className="card-elevated text-center">
                <div className="inline-flex h-12 w-12 rounded-xl bg-accent/10 items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Diagram */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="card-feature">
              <h3 className="text-xl font-semibold text-center mb-8">Data Flow</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Device */}
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium">LiveSitter Mini</span>
                  <p className="text-xs text-muted-foreground mt-1">Captures & processes</p>
                </div>

                <ChevronRight className="h-6 w-6 text-muted-foreground hidden md:block" />
                <div className="h-6 w-0.5 bg-border md:hidden" />

                {/* Processing */}
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Edge AI</span>
                  <p className="text-xs text-muted-foreground mt-1">Counts on-device</p>
                </div>

                <ChevronRight className="h-6 w-6 text-muted-foreground hidden md:block" />
                <div className="h-6 w-0.5 bg-border md:hidden" />

                {/* Transmission */}
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                    <Radio className="h-8 w-8 text-accent" />
                  </div>
                  <span className="text-sm font-medium">LoRaWAN</span>
                  <p className="text-xs text-muted-foreground mt-1">Sends counts only</p>
                </div>

                <ChevronRight className="h-6 w-6 text-muted-foreground hidden md:block" />
                <div className="h-6 w-0.5 bg-border md:hidden" />

                {/* Dashboard */}
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto rounded-xl bg-success/10 flex items-center justify-center mb-3">
                    <BarChart3 className="h-8 w-8 text-success" />
                  </div>
                  <span className="text-sm font-medium">Dashboard</span>
                  <p className="text-xs text-muted-foreground mt-1">Real-time visibility</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Key insight:</strong> Images are processed and discarded on-device.
                  Only numerical counts are transmitted—never images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See it work in your center
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Request a pilot and experience the simplicity of automated compliance.
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
              to="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
