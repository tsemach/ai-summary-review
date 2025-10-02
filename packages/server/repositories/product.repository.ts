import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function getProductById(productId: number) {
  return await prisma.product.findUnique({
    where: { id: productId },
  });
}

export const prodyctRepository = {
  getProductById,
};
