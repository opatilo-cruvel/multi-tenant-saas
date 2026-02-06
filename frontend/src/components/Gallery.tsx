import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    title: "Design Floral",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80",
    title: "Francesinha Moderna",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    title: "Alongamento Elegante",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
    title: "Nail Art Exclusiva",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    title: "Vermelho Clássico",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1610992015732-2449b0af5a9f?w=600&q=80",
    title: "Minimalista Chic",
  },
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-rose-soft to-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Portfólio
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Nossos{" "}
            <span className="text-primary font-medium">Trabalhos</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative aspect-square overflow-hidden rounded-lg cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms`, transition: "all 0.7s ease-out" }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-lg md:text-xl text-background font-medium">
                  {image.title}
                </h3>
              </div>
              {/* Red accent on hover */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 delay-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
