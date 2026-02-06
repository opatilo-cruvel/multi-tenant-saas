import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-soft via-background to-rose-medium"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4">
            Nail Designer
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Emilly Ravelly
          <span className="block text-primary font-medium">Nail</span>
        </h1>

        <p
          className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Transformando unhas em obras de arte. Cuidado, elegância e estilo
          personalizados para você.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-red-dark text-primary-foreground font-body px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Agendar Horário
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/5 font-body px-8 py-6 text-base transition-all duration-300"
          >
            Ver Trabalhos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
