import { prisma } from "../../lib/prisma.js";

export async function getTenantEstablishment(establishmentId: string) {
    return prisma.establishment.findUnique({
        where: { id: establishmentId},
    });
}