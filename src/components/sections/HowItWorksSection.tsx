import { HardDrive, MonitorPlay, Zap } from "lucide-react";

const features = [
  {
    icon: HardDrive,
    title: "Memory Efficient",
    description: "Optimized data structures minimize memory footprint without sacrificing performance.",
    specs: [
      "16-byte packed node structures",
      "8-byte edge references + 4-byte style",
      "100K nodes + 1M edges ≈ 150MB",
    ],
  },
  {
    icon: MonitorPlay,
    title: "GPU-Accelerated",
    description: "Modern rendering pipeline leverages GPU capabilities for smooth visualization.",
    specs: [
      "Instanced quad rendering",
      "SDF-based node textures",
      "Minimal shader invocations",
    ],
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Direct memory mapping enables rapid graph loading for quick iteration cycles.",
    specs: [
      "Direct memory loading",
      "Optimized file formats",
      "Sub-second load times",
    ],
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-surface/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Built from the ground up for performance. No compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-card border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.specs.map((spec) => (
                  <li key={spec} className="text-sm text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="font-mono">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
