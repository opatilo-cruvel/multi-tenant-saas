import { useEffect, useRef, useState } from "react";
import { Award, Clock, Users, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clientes Satisfeitas" },
  { icon: Award, value: "5+", label: "Anos de Experiência" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
  { icon: Clock, value: "1000+", label: "Atendimentos" },
];

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="Emilly Ravelly - Nail Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
            {/* Red accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full" />
          </div>

          {/* Content Side */}
          <div>
            <span
              className={`inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Sobre Mim
            </span>
            <h2
              className={`font-display text-4xl md:text-5xl font-light mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Paixão por{" "}
              <span className="text-primary font-medium">Unhas</span>
            </h2>
            <div
              className={`space-y-4 font-body text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p>
                Olá! Sou Emilly Ravelly, nail designer apaixonada por transformar
                unhas em verdadeiras obras de arte. Com mais de 5 anos de
                experiência, dedico-me a oferecer o melhor em cuidados e design.
              </p>
              <p>
                Cada cliente é única, e meu objetivo é entender seu estilo pessoal
                para criar unhas que reflitam sua personalidade. Utilizo técnicas
                modernas e produtos de alta qualidade para garantir resultados
                duradouros e impecáveis.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 gap-6 mt-10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold text-foreground">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
