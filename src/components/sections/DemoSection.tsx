import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 bg-surface/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how Illuminator handles complex graph exploration with smooth, 
            responsive interactions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video placeholder */}
          <div className="rounded-lg overflow-hidden border border-border bg-card mb-8">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full bg-muted/30 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 cursor-pointer hover:bg-primary/30 transition-colors group">
                  <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-muted-foreground text-sm">Video tutorial coming soon</p>
              </div>
            </AspectRatio>
          </div>

          {/* Caption */}
          <div className="text-center text-muted-foreground text-sm mb-8">
            This walkthrough covers basic navigation, filtering, and layout algorithms 
            on a 50,000-node social network graph.
          </div>

          {/* Screenshot placeholder */}
          <div className="rounded-lg overflow-hidden border border-border bg-card">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center justify-center p-8">
                <div className="grid grid-cols-3 gap-4 w-full max-w-md opacity-30">
                  {/* Placeholder graph visualization */}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-full bg-primary/50"
                      style={{
                        transform: `scale(${0.5 + Math.random() * 0.5})`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mt-6">
                  Interactive screenshot placeholder
                </p>
              </div>
            </AspectRatio>
          </div>

          {/* Try demo CTA */}
          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Try the Interactive Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
