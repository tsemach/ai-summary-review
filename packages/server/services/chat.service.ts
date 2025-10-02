import fs from 'fs';
import path from 'path';
import { conversationRepository } from '../repositories/conversation.repository';
import { llmClient } from '../llm/client';
import template from '../prompts/chatbot.txt';

export interface ChatResponse {
  id: string;
  message: string;
}

const parkInfo = fs.readFileSync(
  path.join(__dirname, '../prompts/WonderWorld.md'),
  'utf-8'
);
const instructions = template.replace('{{parkInfo}}', parkInfo);

async function sendMessage(
  prompt: string,
  conversationId: string
): Promise<ChatResponse> {
  const response = await llmClient.generateText({
    model: 'gpt-4o-mini',
    instructions,
    prompt,
    temperature: 0.2,
    maxTokens: 200,
    previousResponseId:
      conversationRepository.getLastResponseId(conversationId),
  });

  conversationRepository.setLastResponseId(conversationId, response.id);

  return {
    id: response.id,
    message: response.text,
  };
}

export const chatService = {
  sendMessage,
};
