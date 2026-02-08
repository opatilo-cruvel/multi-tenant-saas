import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
} from "lucide-react"

import { Button } from "./ui/button"
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

/**
 * Dados estáticos para simular usuário logado
 */
const mockUser = {
  name: "João Silva",
  email: "joao.silva@email.com",
  image: "https://i.pravatar.cc/150?img=3",
}

/**
 * Dados estáticos para simular quickSearchOptions
 */
const quickSearchOptions = [
  {
    title: "Design",
    imageUrl: "/icons/scissors.svg",
    link: "/barbershops?service=Corte Masculino",
  },
  {
    title: "manutenção",
    imageUrl: "/icons/beard.svg",
    link: "/barbershops?service=Barba",
  },
  {
    title: "Sobrancelha",
    imageUrl: "/icons/eyebrow.svg",
    link: "/barbershops?service=Sobrancelha",
  },
]

const SidebarSheet = () => {
  const isLoggedIn = false // altere para false se quiser simular deslogado

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* Usuário */}
      <div className="flex items-center gap-3 border-b border-solid py-5">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-11 w-11">
              <AvatarImage src={mockUser.image} />
              <AvatarFallback>
                {mockUser.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-bold">{mockUser.name}</p>
              <p className="text-xs">{mockUser.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold">
              Olá, faça seu login!
            </h2>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>
                    Faça login na plataforma
                  </DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google.
                  </DialogDescription>
                </DialogHeader>

                <Button
                  variant="outline"
                  className="gap-1 font-bold"
                >
                  <img
                    src="/google.svg"
                    alt="Google"
                    width={18}
                    height={18}
                  />
                  Google
                </Button>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      {/* Navegação */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button
            className="justify-start gap-2"
            variant="ghost"
            asChild
          >
            <a href="/">
              <HomeIcon size={18} />
              Início
            </a>
          </Button>
        </SheetClose>

        <Button
          className="justify-start gap-2"
          variant="ghost"
        >
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      {/* Busca rápida */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <SheetClose key={option.title} asChild>
            <Button
              className="justify-start gap-2"
              variant="ghost"
              asChild
            >
              <a href={option.link}>
                <img
                  src={option.imageUrl}
                  alt={option.title}
                  width={18}
                  height={18}
                />
                {option.title}
              </a>
            </Button>
          </SheetClose>
        ))}
      </div>

      {/* Logout */}
      <div className="flex flex-col gap-2 py-5">
        <Button
          variant="ghost"
          className="justify-start gap-2"
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
