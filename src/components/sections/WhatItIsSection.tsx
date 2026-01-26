import { 
  Dna, 
  Shield, 
  Brain, 
  Network, 
  Cpu 
} from "lucide-react";

const useCases = [
  {
    icon: Dna,
    title: "Biotech & Biological Networks",
    description: "Protein interactions, gene regulatory networks, metabolic pathways",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Financial transaction networks, suspicious pattern identification",
  },
  {
    icon: Brain,
    title: "Knowledge Graphs",
    description: "Entity relationships, semantic networks, ontology visualization",
  },
  {
    icon: Network,
    title: "Infrastructure Graphs",
    description: "Dependency analysis, service meshes, network topology",
  },
  {
    icon: Cpu,
    title: "ML & Systems Research",
    description: "Neural network architectures, computation graphs, data pipelines",
  },
];

const WhatItIsSection = () => {
  return (
    <section id="what-it-is" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What is Illuminator?
          </h2>
          <p className="text-lg text-muted-foreground">
            Illuminator is a high-performance graph visualization and processing tool built for 
            large-scale networks where traditional tools struggle. It enables researchers and 
            engineers to explore, analyze, and understand complex graph structures with fluid 
            interactivity—regardless of scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItIsSection;
