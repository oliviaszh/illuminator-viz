import { Download, BookOpen, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const GetStartedSection = () => {
  return (
    <section id="get-started" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get Started
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Download Illuminator and start exploring your graphs in minutes. 
            Available for Windows, macOS, and Linux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base glow-border" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Latest
              </a>
            </Button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Documentation</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
