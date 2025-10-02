import type { Request, Response } from 'express';
import { chatService } from '../services/chat.service';
import z from 'zod';

const chatRequestSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, 'Prompt is required')
    .max(1000, 'Prompt is too long (max 1000 characters)'),
  conversationId: z.string().uuid(),
});

export const chatController = {
  sendMessage: async (req: Request, res: Response) => {
    const parseResult = chatRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ error: parseResult.error.format() });
    }

    try {
      const { prompt, conversationId } = req.body;
      const response = await chatService.sendMessage(prompt, conversationId);
      res.json({ message: response.message });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to generate response' });
    }
  },

  // getProductReviews: async (req: Request, res: Response) => {
  //   const productId = Number(req.params.id);

  //   if (isNaN(productId)) {
  //     return res.status(400).json({ error: 'Invalid product ID' });
  //   }

  //   return await chatService.getProductReviews(productId);
  // }
};
