const stats = [
  {
    value: "100K",
    label: "Nodes",
    suffix: "+",
  },
  {
    value: "1M",
    label: "Edges",
    suffix: "+",
  },
  {
    value: "~150",
    label: "MB Memory",
    suffix: "MB",
  },
  {
    value: "60",
    label: "FPS Interaction",
    suffix: "fps",
  },
];

const PerformanceSection = () => {
  return (
    <section id="performance" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Performance at Scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Handle graphs that would bring other tools to their knees. 
            Illuminator maintains fluid interaction even with massive datasets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-card/50 border border-border"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                  <span className="text-lg text-muted-foreground">{stat.suffix !== stat.value && ""}</span>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Comparison callout */}
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  Where traditional tools fail
                </h3>
                <p className="text-muted-foreground text-sm">
                  Most graph visualization libraries struggle past 10,000 nodes due to 
                  inefficient rendering and memory overhead. Illuminator's architecture 
                  was designed specifically to break through these limitations, enabling 
                  researchers to work with real-world graph sizes without compromise.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="font-mono text-sm text-muted-foreground bg-background/50 px-4 py-3 rounded-md border border-border">
                  <div className="text-primary">// Memory comparison</div>
                  <div>Traditional: ~2GB</div>
                  <div>Illuminator: ~150MB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
