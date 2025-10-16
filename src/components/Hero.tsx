import gbitLogo from "@/assets/gbit-logo.png";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      <div className="relative">
        <div className="absolute inset-0 blur-3xl bg-gbit-red opacity-20 rounded-full animate-pulse"></div>
        <img 
          src={gbitLogo} 
          alt="Gbit Framework Logo" 
          className="w-48 h-48 relative z-10 drop-shadow-2xl"
        />
      </div>
      
      <div className="text-center space-y-4 max-w-3xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground">
          Gbit <span className="text-gbit-red text-glow">Framework</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground">
          Crie aplicações completas — Backend, Frontend e Smart Contracts
        </p>
        
        <div className="bg-card border border-border rounded-lg p-6 mt-8 terminal-font text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-gbit-red"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <code className="text-terminal-text">
            <span className="text-gbit-red">$</span> npx create-gbit <span className="text-blue-400">"meu-projeto"</span>
          </code>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-gbit-red">✓</span>
            <span>Backend Completo</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-gbit-red">✓</span>
            <span>Frontend Moderno</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-gbit-red">✓</span>
            <span>Smart Contracts</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-gbit-red">✓</span>
            <span>Docker Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};
