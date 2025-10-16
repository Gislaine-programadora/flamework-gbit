import { Hero } from "@/components/Hero";
import { CLISimulator } from "@/components/CLISimulator";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Hero />
        
        <div className="flex justify-center py-12">
          <CLISimulator />
        </div>
        
        <Features />
        
        <footer className="py-12 text-center text-muted-foreground border-t border-border mt-16">
          <p className="terminal-font">
            Desenvolvido com <span className="text-gbit-red">❤</span> pelo time Gbit Framework
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
