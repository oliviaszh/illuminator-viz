import GraphBackground from "@/components/GraphBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import WhatItIsSection from "@/components/sections/WhatItIsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import DemoSection from "@/components/sections/DemoSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GraphBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <WhatItIsSection />
        <HowItWorksSection />
        <PerformanceSection />
        <DemoSection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
