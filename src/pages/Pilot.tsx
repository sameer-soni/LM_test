import { Layout } from "@/components/layout/Layout";
import { PilotRequestForm } from "@/components/forms/PilotRequestForm";
import { CheckCircle, Clock, Wrench, FileText } from "lucide-react";

const pilotIncludes = [
  "30-60 day pilot period",
  "Devices for up to 4 classrooms",
  "Full dashboard access",
  "Weekly compliance reports",
  "Success criteria defined upfront",
  "Dedicated onboarding support",
];

const timeline = [
  {
    icon: Wrench,
    title: "Install",
    description: "Minutes per device",
  },
  {
    icon: Clock,
    title: "Go-live",
    description: "Same day as install",
  },
  {
    icon: FileText,
    title: "First report",
    description: "24 hours after go-live",
  },
];

const Pilot = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-4">Pilot Program</div>
            <h1 className="text-display mb-6">
              Try LiveSitter in<br />
              your center
            </h1>
            <p className="text-subheadline">
              Start with a focused pilot to see real results before scaling.
              No long-term commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column - Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* What's Included */}
              <div>
                <h2 className="text-xl font-semibold mb-4">What's Included</h2>
                <ul className="space-y-3">
                  {pilotIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Deployment Timeline</h2>
                <div className="space-y-4">
                  {timeline.map((step) => (
                    <div key={step.title} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium">{step.title}</span>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why a pilot */}
              <div className="card-elevated bg-accent/5 border-accent/20">
                <h3 className="font-semibold mb-2">Why start with a pilot?</h3>
                <p className="text-sm text-muted-foreground">
                  A pilot lets you validate LiveSitter in your specific environment with minimal risk.
                  We define success criteria together upfront, so you know exactly what to expect.
                </p>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="lg:col-span-3">
              <div className="card-feature">
                <h2 className="text-xl font-semibold mb-6">Request a Pilot</h2>
                <PilotRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pilot;
