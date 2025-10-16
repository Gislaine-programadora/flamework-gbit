import { Code2, Database, Blocks, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Backend Poderoso",
    description: "Node.js ou Python com Express, Nest.js ou Flask. WebSockets, APIs REST e muito mais.",
  },
  {
    icon: Blocks,
    title: "Frontend Moderno",
    description: "React, Next.js ou Vite com TypeScript. Tailwind CSS e componentes prontos.",
  },
  {
    icon: Database,
    title: "Blockchain Ready",
    description: "Smart contracts em Solidity ou Vyper. Scripts de deploy e ABI automáticos.",
  },
  {
    icon: Rocket,
    title: "Pronto para Produção",
    description: "Docker, Docker Compose, CI/CD com Vercel. Tudo configurado automaticamente.",
  },
];

export const Features = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tudo que você precisa para <span className="text-gbit-red">construir rápido</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-gbit-red transition-all duration-300 hover:shadow-lg hover:shadow-gbit-red/20">
              <CardHeader>
                <div className="w-12 h-12 bg-gbit-red/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gbit-red" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
