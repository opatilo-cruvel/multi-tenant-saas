import { prisma } from "../../lib/prisma.js";

export async function getServicesByEstablishment(establishmentId: string) {
  return prisma.establishmentService.findMany({
    where: {
      establishmentId,
    },
  });
}
