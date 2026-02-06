import { useEffect, useRef, useState } from "react";
import { Sparkles, Gem, Palette, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: "A partir de R$ 120",
  },
  {
    icon: Gem,
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: "A partir de R$ 60",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: "A partir de R$ 80",
  },
  {
    icon: Heart,
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: "A partir de R$ 70",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nossos Serviços
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Arte nas suas{" "}
            <span className="text-primary font-medium">Unhas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group bg-card border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="font-body text-sm font-semibold text-primary">
                  {service.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
