import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="text-display mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  LiveSitter ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, and safeguard information when you use our edge AI occupancy
                  counting devices and services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Device Data:</strong> Our LiveSitter Mini devices capture images
                  solely for the purpose of counting adults and children. These images are processed entirely on-device
                  and are immediately discarded after processing. Only numerical count data is transmitted.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Count Data:</strong> We collect and store aggregated count data
                  (number of adults and children) along with timestamps and room identifiers.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Account Information:</strong> When you sign up for our services,
                  we collect your name, email address, organization name, and other contact information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. How We Use Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to provide occupancy counting and compliance monitoring services,
                  generate reports, improve our AI models, and communicate with you about your account and our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Retention</h2>
                <p className="text-muted-foreground">
                  Images are never stored—they are processed and discarded on-device within milliseconds. Count data
                  is retained for the duration of your service agreement plus any period required for compliance
                  documentation purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your data, including
                  encryption in transit and at rest, access controls, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our devices are designed for use in childcare environments. We do not collect personally identifiable
                  information about children. Our system counts children but does not identify, track, or store any
                  information about individual children.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, correct, or delete your account information. To exercise these rights,
                  please contact us at privacy@livesitter.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: privacy@livesitter.com<br />
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

export default Privacy;
