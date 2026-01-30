import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-display mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using LiveSitter's services, you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  LiveSitter provides edge AI-powered occupancy counting devices and associated software services
                  designed for childcare compliance monitoring. Our services include hardware devices, dashboard
                  access, and reporting features.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the security of your account credentials, ensuring proper
                  installation and use of devices, complying with all applicable laws and regulations, and
                  providing accurate information during registration.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Privacy and Data</h2>
                <p className="text-muted-foreground">
                  Your use of our services is also governed by our Privacy Policy. LiveSitter devices process
                  images on-device and do not store or transmit images. Only count data is collected and stored.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All intellectual property rights in our services, including software, hardware designs, and
                  documentation, remain the property of LiveSitter. You are granted a limited license to use
                  our services for their intended purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  LiveSitter provides occupancy counting as a tool to assist with compliance monitoring. We do
                  not guarantee compliance with any specific regulations. You remain responsible for ensuring
                  your childcare facility meets all applicable requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive to maintain high availability of our services but do not guarantee uninterrupted
                  access. Scheduled maintenance and unforeseen issues may occasionally affect service availability.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate service according to the terms of the service agreement. Upon
                  termination, your access to the dashboard and stored data will be handled according to
                  your agreement terms and applicable data retention requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms of Service from time to time. We will notify you of significant
                  changes via email or through our dashboard. Continued use of our services after changes
                  constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: legal@livesitter.com<br />
                  Address: Austin, Texas
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
