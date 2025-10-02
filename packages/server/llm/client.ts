import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type GenerateTextOptions = {
  model?: string;
  prompt: string;
  instructions?: string;
  temperature?: number;
  maxTokens?: number;
  previousResponseId?: string;
};

type GenerateTextResult = {
  id: string;
  text: string;
};

async function generateText({
  model = 'gpt-4.1',
  prompt,
  instructions,
  temperature = 0.2,
  maxTokens = 300,
  previousResponseId: previeousResponseId,
}: GenerateTextOptions): Promise<GenerateTextResult> {
  const response = await client.responses.create({
    model,
    input: prompt,
    instructions,
    temperature,
    max_output_tokens: maxTokens,
    previous_response_id: previeousResponseId,
  });

  return { id: response.id, text: response.output_text };
}

export const llmClient = {
  generateText,
};
