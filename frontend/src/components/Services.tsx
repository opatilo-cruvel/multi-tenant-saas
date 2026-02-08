import { useEffect, useRef, useState } from "react";
import { Sparkles, Gem, Palette, Heart, StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sparkles,
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: "A partir de R$ 120",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha1.svg",
  },
  {
    icon: Gem,
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: "A partir de R$ 60",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha2.svg",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: "A partir de R$ 80",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha3.svg",
  },
  {
    icon: Heart,
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: "A partir de R$ 70",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha4.svg",
  },
  {
    icon: Sparkles,
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: "A partir de R$ 120",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha1.svg",
  },
  {
    icon: Gem,
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: "A partir de R$ 60",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha2.svg",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: "A partir de R$ 80",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha3.svg",
  },
  {
    icon: Heart,
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: "A partir de R$ 70",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services-card/unha4.svg",
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

        {/* TITULOS */}
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

        {/* CARDS */}
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {services.map((service, index) => (
            <Card className="min-w-[167px] rounded-2xl">
              <CardContent className="p-0 px-1 pt-1">
                {/*IMAGEM*/}
                <div className="relative h-[159px] w-full">
                
                  <img
                    src={service.url}
                    alt={service.title}
                    className="w-full h-full rounded-2xl object-cover"
                  />

                  <Badge
                    className="absolute left-2 top-2 space-x-1"
                    variant="secondary"
                  >
                    <StarIcon size={12} className="fill-primary text-primary" />
                    <p className="text-xs font-semibold">5.0</p>
                  </Badge>
                </div>

                {/* TEXTO */}
                <div className="px-1 py-3">
                  <h3 className="truncate font-semibold">{service.title}</h3>
                  <p className="truncate text-sm text-gray-400">{service.description}</p>
                  <Button variant="secondary" className="mt-3 w-full" asChild>
                    <Link to="/servicos">Saiba Mais</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
