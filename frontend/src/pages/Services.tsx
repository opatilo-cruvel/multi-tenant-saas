import Footer from "@/components/Footer"
import PhoneItem from "@/components/phone-item"
import ServiceItem from "@/components/Service-item"
import SidebarSheet from "@/components/sidebar-sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Link } from "react-router-dom"

export const services = [
  {
    id: 1,
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: 120.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha1.svg",
  },
  {
    id: 2,
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: 60.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha2.svg",
  },
  {
    id: 3,
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: 80.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha3.svg",
  },
  {
    id: 4,
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: 70.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha4.svg",
  },
  {
    id: 5,
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: 120.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha1.svg",
  },
  {
    id: 6,
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: 60.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha2.svg",
  },
  {
    id: 7,
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: 80.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha3.svg",
  },
  {
    id: 8,
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: 70.00,
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha4.svg",
  },
];

const ServicesPage = () => {

    return (
        <div>
            <div className="relative h-[250px] w-full">

                <img className="object-cover w-full h-full" src="https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/service-banner/service-banner.svg" alt="" />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                    asChild
                    >
                    <Link to="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                        size="icon"
                        variant="outline"
                        className="absolute right-4 top-4"
                        >
                        <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SidebarSheet />
                </Sheet>
            </div>

            {/* TITÚLO */}
            <div className="border-b border-solid p-5">
                <h1 className="mb-3 text-xl font-bold">Ravelly Nail</h1>
                <div className="mb-2 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">Rua das Flores, 123 - Centro</p>
                </div>

                <div className="flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 (499 avaliações)</p>
                </div>
            </div>

            {/* DESCRIÇÂO */}
            <div className="space-y-2 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
                <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.</p>
            </div>

            {/* SERVIÇOS */}
            <div className="space-y-3 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
                <div className="space-y-3">
                    {services.map((service) => (
                        <ServiceItem key={service.id} service={service}/>
                    ))}
                </div>
            </div>

            {/* CONTATO */}
            <div className="space-y-3 p-5">
                <PhoneItem/>
            </div>

            <Footer/>
        </div>
    )
}

export default ServicesPage