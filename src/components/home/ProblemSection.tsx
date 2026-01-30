import { AlertTriangle, FileCheck, Users } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Ratio Compliance",
    description:
      "Manual ratio tracking is error-prone and time-consuming. Missed counts can lead to violations and fines.",
  },
  {
    icon: FileCheck,
    title: "Audit Readiness",
    description:
      "Paper logs and spreadsheets don't cut it. Regulators expect timestamped, verifiable records.",
  },
  {
    icon: Users,
    title: "Child Safety",
    description:
      "Real-time visibility into classroom occupancy helps prevent overcrowding and ensures adequate supervision.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-headline mb-4">
            The compliance challenge
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Childcare operators face constant pressure to maintain proper adult-to-child
            ratios while managing documentation for audits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="card-feature text-center group"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10 text-destructive mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
