import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useTenant } from "@/hooks/useTenant";

const PhoneItem = () => {
  // Lista de telefones estáticos
  const { tenant } = useTenant();

  const phones = tenant?.phones ?? [];

  const handleCopyPhoneClick = (phone: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(phone)
        .then(() => {
          toast.success(`Telefone ${phone} copiado com sucesso!`)
        })
        .catch((err) => {
          console.error("Erro ao copiar o telefone: ", err)
          toast.error("Erro ao tentar copiar o telefone.")
        })
    } else {
      toast.error(
        "Desculpe, sua plataforma não suporta copiar para a área de transferência."
      )
    }
  }

  if (!phones.length) {
    return (
      <p className="text-sm text-gray-400">
        Nenhum telefone cadastrado.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {phones.map((phone) => (
        <div
          className="flex justify-between items-center"
          key={phone}
        >
          {/* ESQUERDA */}
          <div className="flex items-center gap-2">
            <SmartphoneIcon />
            <p className="text-sm">{phone}</p>
          </div>

          {/* DIREITA */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleCopyPhoneClick(phone)}
          >
            Copiar
          </Button>
        </div>
      ))}
    </div>
  )
}

export default PhoneItem
