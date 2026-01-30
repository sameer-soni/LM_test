import { Layout } from "@/components/layout/Layout";
import { DashboardPreview } from "@/components/dashboard/DashboardPreview";
import { Link } from "react-router-dom";
import { ChevronRight, BarChart3, FileText, Bell, Clock } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Live Occupancy",
    description: "Real-time adult and child counts for every room, updated continuously.",
  },
  {
    icon: Bell,
    title: "Compliance Alerts",
    description: "Instant notifications when ratios approach or exceed thresholds.",
  },
  {
    icon: Clock,
    title: "Time-Based Trends",
    description: "Historical data showing occupancy patterns throughout the day and week.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Reports",
    description: "Timestamped compliance reports ready for regulatory review.",
  },
];

const Dashboard = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge-primary mb-4">Dashboard</div>
            <h1 className="text-display mb-6">
              Compliance visibility.<br />
              At a glance.
            </h1>
            <p className="text-subheadline">
              Monitor real-time occupancy, track compliance status, and generate 
              audit-ready reports—all from one intuitive dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="pb-20">
        <div className="container-wide">
          <DashboardPreview />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-headline mb-4">Dashboard Features</h2>
            <p className="text-subheadline max-w-2xl mx-auto">
              Everything you need to monitor and maintain compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-elevated">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-headline mb-6">What you'll see</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-success">1</span>
                  </div>
                  <div>
                    <span className="font-medium">Live occupancy counts by room</span>
                    <p className="text-sm text-muted-foreground">
                      See exactly how many adults and children are in each space, updated in real-time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-success">2</span>
                  </div>
                  <div>
                    <span className="font-medium">Ratio compliance indicators</span>
                    <p className="text-sm text-muted-foreground">
                      Green, yellow, and red status badges show compliance at a glance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-success">3</span>
                  </div>
                  <div>
                    <span className="font-medium">Time-based trends</span>
                    <p className="text-sm text-muted-foreground">
                      Historical charts showing patterns across hours, days, and weeks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-success">4</span>
                  </div>
                  <div>
                    <span className="font-medium">Audit log with timestamps</span>
                    <p className="text-sm text-muted-foreground">
                      Complete record of all occupancy changes with precise timestamps.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-success">5</span>
                  </div>
                  <div>
                    <span className="font-medium">Weekly/monthly compliance reports</span>
                    <p className="text-sm text-muted-foreground">
                      Automated reports ready for regulatory submissions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <div className="text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ready to see your data?</h3>
                <p className="text-muted-foreground mb-6">
                  Start a pilot and get access to your personalized dashboard.
                </p>
                <Link to="/pilot" className="btn-primary">
                  Request a Pilot
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
