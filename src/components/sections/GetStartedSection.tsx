import { Mail, BookOpen } from "lucide-react";
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
            Illuminator is currently in private beta. If you're interested in
            beta testing or want to learn more, get in touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-base glow-border" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact for Beta Access
              </a>
            </Button>
          </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
