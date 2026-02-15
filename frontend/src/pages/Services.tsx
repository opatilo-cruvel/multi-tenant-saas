import Footer from "@/components/Footer"
import PhoneItem from "@/components/phone-item"
import ServiceItem from "@/components/Service-item"
import SidebarSheet from "@/components/sidebar-sheet"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { useTenant } from "@/hooks/useTenant";


const ServicesPage = () => {

    const { tenant, loading } = useTenant();
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        async function loadData() {
            const serv = await api.getServices();
            setServices(Array.isArray(serv) ? serv : []);
        }

        loadData();
    }, []);



    if (loading || !tenant) {
        return <div>Loading...</div>;
    }
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
                <h1 className="mb-3 text-xl font-bold">{tenant.name}</h1>
                <div className="mb-2 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{tenant.address}</p>
                </div>

                <div className="flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 (499 avaliações)</p>
                </div>
            </div>

            {/* DESCRIÇÂO */}
            <div className="space-y-2 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
                <p className="text-justify text-sm">{tenant.description}</p>
            </div>

            {/* SERVIÇOS */}
            <div className="space-y-3 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
                <div className="space-y-3">
                    {services.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>

            {/* CONTATO */}
            <div className="space-y-3 p-5">
                <PhoneItem />
            </div>

            <Footer />
        </div>
    )
}

export default ServicesPage