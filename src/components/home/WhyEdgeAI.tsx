import { Shield, Wifi, Zap, Lock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Images are processed on-device and never leave the classroom. Only counts are transmitted.",
  },
  {
    icon: Lock,
    title: "No Video Streaming",
    description: "Unlike traditional cameras, LiveSitter doesn't record or stream video. Zero footage to secure.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Edge inference means real-time counts without cloud latency or bandwidth concerns.",
  },
  {
    icon: Wifi,
    title: "LoRaWAN Backhaul",
    description: "Low-power, long-range transmission. Works reliably indoors with minimal infrastructure.",
  },
];

export function WhyEdgeAI() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="badge-primary mb-4">Why Edge AI</div>
            <h2 className="text-headline mb-6">
              Built for privacy.<br />Designed for compliance.
            </h2>
            <p className="text-subheadline mb-8">
              Traditional surveillance raises privacy concerns. LiveSitter Mini processes
              everything locally—your images never leave the room.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-primary mb-6">
                  <Shield className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Privacy by Design</h3>
                <p className="text-muted-foreground">
                  Images processed locally.<br />Only counts transmitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
