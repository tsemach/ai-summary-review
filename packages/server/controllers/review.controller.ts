import type { Request, Response } from 'express';
import { reviewService } from '../services/review.service';
import { prodyctRepository } from '../repositories/product.repository';
import { reviewRepository } from '../repositories/review.repository';
import { modelRepository } from '../repositories/model.repository';

async function getProductReviews(req: Request, res: Response) {
  const productId = Number(req.params.id);

  if (isNaN(productId)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }

  const product = await prodyctRepository.getProductById(productId);
  if (!product) {
    return res.status(404).json({ error: 'Product does not exist.' });
  }

  const reviews = await reviewRepository.getProductReviews(productId);
  const summary = await reviewRepository.getReviewSummary(productId);

  res.json({
    reviews,
    summary,
  });
}

async function summarizeReviews(req: Request, res: Response) {
  const productId = Number(req.params.id);

  if (isNaN(productId)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }

  const product = await prodyctRepository.getProductById(productId);
  if (!product) {
    return res.status(400).json({ error: 'Invalid product' });
  }

  const reviews = await reviewRepository.getProductReviews(productId, 1);
  if (reviews.length === 0) {
    return res
      .status(400)
      .json({ error: 'There are no reviews to summarize ' });
  }

  const summary = await reviewService.summarizeReviews(productId);
  res.json({ summary });
}

function getAllModels(req: Request, res: Response) {
  return res.json(modelRepository.getAllModels());
}

function getCurrentModel(req: Request, res: Response) {
  return res.json(modelRepository.getCurrentModel());
}

function setCurrentModel(req: Request, res: Response) {
  if (!req.body) {
    return res.status(400).json({ error: 'No model ID provided' });
  }

  if (typeof req.body !== 'object') {
    return res.status(400).json({ error: 'Not json object' });
  }

  if (!req.body.modelId) {
    return res.status(400).json({ error: 'No modelId provided' });
  }

  const { modelId } = req.body;

  const model = modelRepository.setCurrentModel(modelId);
  if (!model) {
    return res.status(400).json({ error: 'Model does not exist' });
  }

  return res.json(model);
}

export const reviewController = {
  getProductReviews,
  summarizeReviews,
  getAllModels,
  getCurrentModel,
  setCurrentModel,
};
