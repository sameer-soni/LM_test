import { Building2, UserCheck, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Childcare Owners",
    description:
      "Gain visibility across all locations. Identify compliance risks before they become violations.",
  },
  {
    icon: UserCheck,
    title: "Center Directors",
    description:
      "Monitor real-time occupancy without interrupting classrooms. Focus on operations, not counting.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Teams",
    description:
      "Access audit-ready reports instantly. Demonstrate continuous compliance with timestamped data.",
  },
];

export function WhoItsFor() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-headline mb-4">
            Who it's for
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            LiveSitter Mini serves everyone responsible for maintaining safe, compliant childcare environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="card-elevated text-center"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                <audience.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/pilot" className="btn-primary">
            Start Your Pilot
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
