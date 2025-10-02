import dayjs from 'dayjs';
import { PrismaClient, type Review } from '../generated/prisma';

const prisma = new PrismaClient();

async function getProductReviews(
  productId: number,
  limit?: number
): Promise<Review[]> {
  return await prisma.review.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });
}

function storeReviewSummary(productId: number, summary: string) {
  const now = new Date();
  const expiresAt = dayjs().add(7, 'days').toDate();
  const data = {
    content: summary,
    expiresAt,
    generatedAt: now,
    productId,
  };

  return prisma.summary.upsert({
    where: { id: productId },
    create: data,
    update: data,
  });
}

async function getReviewSummary(productId: number): Promise<string | null> {
  const summary = await prisma.summary.findFirst({
    where: {
      AND: [{ productId }, { expiresAt: { gt: new Date() } }],
    },
  });

  if (!summary) {
    return null;
  }

  return summary.content;
}

export const reviewRepository = {
  getProductReviews,
  storeReviewSummary,
  getReviewSummary,
};
