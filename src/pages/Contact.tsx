import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Mail, MapPin, ChevronRight, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <div className="badge-primary mb-4">Contact</div>
            <h1 className="text-display mb-6">
              Let's talk
            </h1>
            <p className="text-subheadline">
              Book a demo to see LiveSitter in action, or reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Calendly placeholder */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Book a Demo</h2>
              <div className="card-feature">
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Calendly embed will appear here
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      (Replace with your Calendly embed code)
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Schedule a 30-minute demo to see LiveSitter's dashboard and learn how it can
                  simplify compliance at your childcare center.
                </p>
              </div>
            </div>

            {/* Right - Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Email</span>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:hello@livesitter.com"
                          className="hover:text-primary transition-colors"
                        >
                          hello@livesitter.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Location</span>
                      <p className="text-muted-foreground">Austin, Texas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated bg-accent/5 border-accent/20">
                <h3 className="font-semibold mb-2">Ready to start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're ready to try LiveSitter in your center, request a pilot and we'll
                  get you set up quickly.
                </p>
                <Link to="/pilot" className="btn-primary">
                  Request a Pilot
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Common questions answered</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Before reaching out, check our FAQ for answers to the most common questions
                  about LiveSitter, privacy, and deployment.
                </p>
                <Link to="/faq" className="text-sm font-medium text-primary hover:underline">
                  View FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
