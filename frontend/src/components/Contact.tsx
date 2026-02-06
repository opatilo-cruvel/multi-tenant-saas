import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    content: "Rua das Flores, 123 - Centro",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(00) 99999-9999",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sáb: 9h às 19h",
  },
];

const Contact = () => {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-t from-rose-soft to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contato
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Fale{" "}
            <span className="text-primary font-medium">Conosco</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-card rounded-2xl p-8 shadow-lg border border-border/50 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-display text-2xl font-medium mb-6">
              Agende seu horário
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  placeholder="Seu nome"
                  className="bg-background border-border/50 focus:border-primary"
                />
                <Input
                  type="tel"
                  placeholder="Seu telefone"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-background border-border/50 focus:border-primary"
              />
              <Textarea
                placeholder="Sua mensagem ou serviço desejado..."
                rows={4}
                className="bg-background border-border/50 focus:border-primary resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-red-dark text-primary-foreground font-body py-6 text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
