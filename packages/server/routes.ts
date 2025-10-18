import express from 'express';
import type { Request, Response } from 'express';
import { chatController } from './controllers/chat.controller';
import { PrismaClient } from './generated/prisma';
import { reviewController } from './controllers/review.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`Hello World!`);
});

router.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});

router.post('/api/chat', chatController.sendMessage);

router.get('/api/products/:id/reviews', reviewController.getProductReviews);
router.post(
  '/api/products/:id/reviews/summarize',
  reviewController.summarizeReviews
);

router.get('/api/models', reviewController.getAllModels);
router.get('/api/models/current', reviewController.getCurrentModel);
router.post('/api/models/current', reviewController.setCurrentModel);

export default router;
