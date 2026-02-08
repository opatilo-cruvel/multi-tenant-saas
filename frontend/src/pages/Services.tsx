import Footer from "@/components/Footer"
import PhoneItem from "@/components/phone-item"
import SidebarSheet from "@/components/sidebar-sheet"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"

import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: "A partir de R$ 120",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha1.svg",
  },
  {
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: "A partir de R$ 60",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha2.svg",
  },
  {
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: "A partir de R$ 80",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha3.svg",
  },
  {
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: "A partir de R$ 70",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha4.svg",
  },
  {
    title: "Alongamento em Gel",
    description: "Unhas perfeitas e duradouras com técnicas avançadas de alongamento em gel.",
    price: "A partir de R$ 120",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha1.svg",
  },
  {
    title: "Esmaltação em Gel",
    description: "Cores vibrantes e duração de até 3 semanas com acabamento impecável.",
    price: "A partir de R$ 60",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha2.svg",
  },
  {
    title: "Nail Art",
    description: "Designs exclusivos e personalizados para expressar sua personalidade.",
    price: "A partir de R$ 80",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha3.svg",
  },
  {
    title: "Manutenção",
    description: "Cuidados regulares para manter suas unhas sempre perfeitas e saudáveis.",
    price: "A partir de R$ 70",
    url: "https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha4.svg",
  },
];

const ServicesPage = () => {

    return (
        <div>
            <div className="relative h-[250px] w-full">
                <img className="object-cover" src="https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/service-banner/service-banner.svg" alt="" />

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
                    {/*TRANFORMAR EM COMPONENTES -> */}
                    <Card>
                        <CardContent className="flex items-center gap-3 p-3">
                            <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
                                <img className="rounded-lg object-cover" src="https://gzfhudizzeavtqohsthc.supabase.co/storage/v1/object/public/images/establishments/default/services/unha3.svg" alt="" />

                                <div className="space-y-2">

                                </div>
                            </div>
                            
                        </CardContent>
                    </Card>
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