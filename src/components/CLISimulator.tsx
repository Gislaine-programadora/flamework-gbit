import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Question = {
  id: string;
  text: string;
  options?: string[];
  defaultValue?: string;
};

const questions: Question[] = [
  { id: "name", text: "Nome do projeto:", defaultValue: "my-enterprise-app" },
  { id: "backend", text: "Incluir backend?", options: ["Y", "n"] },
  { id: "backendLang", text: "Linguagem do backend?", options: ["Node.js", "Python"] },
  { id: "backendFramework", text: "Framework backend?", options: ["Express", "Nest", "Flask"] },
  { id: "websockets", text: "Incluir WebSockets?", options: ["Y", "n"] },
  { id: "database", text: "Base de dados?", options: ["SQLite", "PostgreSQL", "Nenhum"] },
  { id: "frontend", text: "Incluir frontend?", options: ["Y", "n"] },
  { id: "frontendLang", text: "Linguagem do frontend?", options: ["JavaScript", "TypeScript"] },
  { id: "frontendFramework", text: "Framework frontend?", options: ["React", "Next.js", "Vite"] },
  { id: "smartContracts", text: "Incluir smart contracts?", options: ["Y", "n"] },
  { id: "contractLang", text: "Linguagem dos smart contracts?", options: ["Solidity", "Vyper"] },
  { id: "deployScripts", text: "Gerar scripts de deploy e ABI automaticamente?", options: ["Y", "n"] },
  { id: "theme", text: "Tema inicial do frontend?", options: ["Gbit Dark", "Gbit Light", "Minimal"] },
  { id: "docker", text: "Adicionar Docker e Docker Compose?", options: ["Y", "n"] },
  { id: "gitVercel", text: "Incluir configuração Git + Vercel + README automático?", options: ["Y", "n"] },
  { id: "structure", text: "Criar estrutura completa ou parcial?", options: ["Somente Backend", "Somente Frontend", "Somente Smart Contracts", "Projeto Completo (Full Stack)"] },
];

export const CLISimulator = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentStep === -1) {
      const welcomeText = "🚀 Bem-vindo ao Create Gbit App (Gbit Framework)\nCrie aplicações completas — Backend, Frontend e Smart Contracts — prontas para produção.\n\n";
      let index = 0;
      const interval = setInterval(() => {
        if (index < welcomeText.length) {
          setTypingText(welcomeText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setCurrentStep(0), 500);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleAnswer = (value: string) => {
    const question = questions[currentStep];
    setAnswers(prev => ({ ...prev, [question.id]: value }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setIsGenerating(true);
    }
  };

  const handleStart = () => {
    setCurrentStep(-1);
    setTypingText("");
  };

  if (currentStep === -1 && !typingText) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <Button 
          onClick={handleStart}
          className="bg-gbit-red hover:bg-gbit-red-dark text-white px-8 py-6 text-lg glow-red transition-all"
        >
          Iniciar Gerador de Projeto
        </Button>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-4xl bg-terminal-bg border-terminal-border border-2 p-6 terminal-font">
      <div className="space-y-4 text-terminal-text">
        {currentStep === -1 && (
          <div className="whitespace-pre-wrap">
            {typingText}
            {showCursor && <span className="animate-pulse">_</span>}
          </div>
        )}
        
        {currentStep >= 0 && (
          <>
            {questions.slice(0, currentStep).map((q, i) => (
              <div key={q.id} className="flex items-start gap-2">
                <span className="text-gbit-red font-bold">{getEmoji(i)}</span>
                <span>{q.text}</span>
                <span className="text-white font-bold">{answers[q.id]}</span>
              </div>
            ))}
            
            {!isGenerating && currentStep < questions.length && (
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-gbit-red font-bold">{getEmoji(currentStep)}</span>
                  <span>{questions[currentStep].text}</span>
                  {showCursor && <span className="animate-pulse">_</span>}
                </div>
                
                {questions[currentStep].options && (
                  <div className="flex flex-wrap gap-2 ml-6">
                    {questions[currentStep].options!.map(option => (
                      <Button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        variant="outline"
                        className="bg-transparent border-gbit-red text-terminal-text hover:bg-gbit-red hover:text-white transition-all"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
                
                {questions[currentStep].defaultValue && (
                  <div className="ml-6">
                    <Button
                      onClick={() => handleAnswer(questions[currentStep].defaultValue!)}
                      className="bg-gbit-red hover:bg-gbit-red-dark text-white"
                    >
                      Usar padrão: {questions[currentStep].defaultValue}
                    </Button>
                  </div>
                )}
              </div>
            )}
            
            {isGenerating && <ProjectStructure answers={answers} />}
          </>
        )}
      </div>
    </Card>
  );
};

const getEmoji = (index: number): string => {
  const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "1️⃣1️⃣", "1️⃣2️⃣", "1️⃣3️⃣", "1️⃣4️⃣", "1️⃣5️⃣", "1️⃣6️⃣"];
  return emojis[index] || "✨";
};

const ProjectStructure = ({ answers }: { answers: Record<string, string> }) => {
  const [visibleLines, setVisibleLines] = useState(0);

  const structure = [
    `\n✨ Gerando estrutura do projeto: ${answers.name || 'my-enterprise-app'}...\n`,
    ...(answers.backend === "Y" ? [
      "\n📁 /backend",
      "  ├── src/",
      "  │   ├── routes/",
      "  │   ├── controllers/",
      "  │   ├── models/",
      "  │   ├── services/",
      "  │   └── utils/",
      "  ├── app.js",
      "  ├── package.json",
      "  ├── config/",
      "  ├── .env",
      "  ├── Dockerfile",
      "  └── README.md",
    ] : []),
    ...(answers.frontend === "Y" ? [
      "\n📁 /frontend",
      "  ├── public/",
      "  ├── src/",
      "  │   ├── components/",
      "  │   ├── pages/",
      "  │   ├── services/",
      "  │   ├── styles/",
      "  │   ├── assets/",
      "  │   ├── App.css",
      "  │   ├── App.js",
      "  │   ├── index.js",
      "  │   └── .env",
      "  ├── tailwind.config.js",
      "  ├── postcss.config.js",
      "  ├── Dockerfile",
      "  └── README.md",
    ] : []),
    ...(answers.smartContracts === "Y" ? [
      "\n📁 /contracts",
      "  ├── GbitToken.sol",
      "  ├── scripts/",
      "  │   ├── deploy.js",
      "  │   └── verify.js",
      "  ├── build/",
      "  │   └── abi/",
      "  ├── hardhat.config.js",
      "  └── README.md",
    ] : []),
    ...(answers.database !== "Nenhum" ? [
      "\n📁 /database",
      "  ├── schema.sql",
      "  ├── migrations/",
      "  ├── seeds/",
      "  └── README.md",
    ] : []),
    ...(answers.docker === "Y" ? [
      "\n📁 /docker",
      "  ├── Dockerfile",
      "  ├── docker-compose.yml",
      "  └── .dockerignore",
    ] : []),
    "\n✅ Projeto gerado com sucesso!",
    "\n📝 Próximos passos:",
    `  $ cd ${answers.name || 'my-enterprise-app'}`,
    "  $ npm install",
    "  $ npm run dev",
    "\n🚀 Happy coding com Gbit Framework!",
  ];

  useEffect(() => {
    if (visibleLines < structure.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, structure.length]);

  return (
    <div className="mt-4 space-y-1">
      {structure.slice(0, visibleLines).map((line, i) => (
        <div 
          key={i} 
          className={`${line.startsWith("✨") || line.startsWith("✅") || line.startsWith("🚀") ? "text-gbit-red font-bold" : ""} ${line.startsWith("$") ? "text-yellow-400" : ""}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
};
