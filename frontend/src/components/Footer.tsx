import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-display text-xl font-semibold">
            <span className="text-background">Emilly Ravelly</span>
            <span className="text-primary"> Nail</span>
          </a>

          <div className="flex items-center gap-1 font-body text-sm text-background/70">
            Feito com <Heart size={14} className="text-primary fill-primary mx-1" /> © {new Date().getFullYear()}
          </div>

          <nav className="flex items-center gap-6">
            <a href="#services" className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-300">
              Serviços
            </a>
            <a href="#gallery" className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-300">
              Galeria
            </a>
            <a href="#contact" className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-300">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
