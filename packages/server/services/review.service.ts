import { reviewRepository } from '../repositories/review.repository';
import { llmClient } from '../llm/client';
import template from '../prompts/summarize-reviews.txt';

async function summarizeReviews(productId: number): Promise<string> {
  const exisingSummary = await reviewRepository.getReviewSummary(productId);

  if (exisingSummary) {
    return exisingSummary;
  }

  const reviews = await reviewRepository.getProductReviews(productId, 10);
  const joinedReviews = reviews.map((r) => r.content).join('\n\n');

  const prompt = template.replace('{{reviews}}', joinedReviews);

  const { text: summary } = await llmClient.generateText({
    model: 'gpt-4.1',
    prompt,
    temperature: 0.2,
    maxTokens: 500,
  });

  await reviewRepository.storeReviewSummary(productId, summary);

  return summary;
}

export const reviewService = {
  summarizeReviews,
};
