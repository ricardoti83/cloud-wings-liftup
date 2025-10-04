import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cloud, Zap, Shield, Database, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      icon: Database,
      title: "Infraestrutura como Serviço",
      description: "Servidores e recursos escaláveis sob demanda para sua empresa crescer sem limites.",
    },
    {
      icon: Zap,
      title: "Automações de Processos",
      description: "Otimize operações e ganhe eficiência com automações inteligentes e personalizadas.",
    },
    {
      icon: Cloud,
      title: "Atendimento ao Cliente",
      description: "Soluções automatizadas para melhorar a experiência e satisfação dos seus clientes.",
    },
    {
      icon: Shield,
      title: "Backup em Nuvem",
      description: "Proteção total dos seus dados com backup seguro, confiável e sempre disponível.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] -z-10" />
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            Leve sua empresa para a nuvem
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Soluções completas em cloud computing para transformar seu negócio com eficiência, segurança e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
              <Link to="/contato">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link to="/servicos">Conheça os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Cloud Wings</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos especialistas em soluções de tecnologia na nuvem, ajudando empresas de todos os tamanhos a 
            <span className="text-primary font-semibold"> reduzir custos</span>, 
            <span className="text-primary font-semibold"> aumentar a eficiência</span> e 
            <span className="text-primary font-semibold"> fortalecer a segurança</span> de seus dados. 
            Nossa missão é tornar a transformação digital acessível e descomplicada.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para levar sua empresa ao próximo nível tecnológico
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            "Tecnologia de ponta com atendimento humanizado. Essa é a Cloud Wings."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            Junte-se a dezenas de empresas que já transformaram seus negócios com nossas soluções em nuvem.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato e descubra como podemos ajudar sua empresa a crescer com segurança e eficiência.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
            <Link to="/contato">
              Fale com Nossa Equipe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
