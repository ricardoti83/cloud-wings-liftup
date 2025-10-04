import { Database, Zap, Cloud, Shield, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Infraestrutura como Serviço (IaaS)",
      description:
        "Disponibilizamos recursos de TI completos e escaláveis na nuvem, permitindo que sua empresa tenha servidores, armazenamento e redes sob demanda, sem a necessidade de investir em hardware físico.",
      benefits: [
        "Redução de custos com infraestrutura física",
        "Escalabilidade conforme a demanda do negócio",
        "Flexibilidade para crescer sem limitações",
        "Manutenção e atualizações automáticas",
      ],
    },
    {
      icon: Zap,
      title: "Suporte a Automações de Processos",
      description:
        "Automatize tarefas repetitivas e otimize fluxos de trabalho com nossas soluções personalizadas. Ganhe tempo, reduza erros e aumente a produtividade da sua equipe.",
      benefits: [
        "Eliminação de tarefas manuais repetitivas",
        "Maior eficiência operacional",
        "Redução de erros humanos",
        "Integração com sistemas existentes",
      ],
    },
    {
      icon: Cloud,
      title: "Automações de Atendimento ao Cliente",
      description:
        "Melhore a experiência dos seus clientes com soluções automatizadas de atendimento. Chatbots inteligentes, respostas rápidas e suporte 24/7 para garantir satisfação total.",
      benefits: [
        "Atendimento disponível 24 horas por dia",
        "Respostas rápidas e precisas",
        "Redução no tempo de espera",
        "Maior satisfação do cliente",
      ],
    },
    {
      icon: Shield,
      title: "Backup em Nuvem Seguro e Escalável",
      description:
        "Proteja seus dados mais importantes com backup automático na nuvem. Segurança de ponta, recuperação rápida e tranquilidade para sua empresa operar sem preocupações.",
      benefits: [
        "Proteção contra perda de dados",
        "Recuperação rápida em caso de falhas",
        "Criptografia de dados avançada",
        "Armazenamento escalável conforme necessidade",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] -z-10" />
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Soluções completas em cloud computing para impulsionar o crescimento do seu negócio
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden animate-fade-in hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 pb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Benefícios:</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interessado em nossas soluções?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato e descubra como podemos personalizar nossos serviços para atender às necessidades da sua empresa.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
            <Link to="/contato">Solicitar Orçamento</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
