import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    const element = document.querySelector("#demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            Interactive visualization for{" "}
            <span className="gradient-text">large-scale graphs</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Memory-efficient, GPU-accelerated graph rendering designed for researchers and engineers 
            working with millions of nodes and edges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={scrollToDemo}
              className="text-base glow-border"
            >
              <Play className="mr-2 h-5 w-5" />
              Try the Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-muted-foreground/30 hover:border-primary"
            >
              <a href="mailto:contact@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Request Beta Access
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
