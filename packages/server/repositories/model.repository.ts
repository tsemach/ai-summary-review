const models = [
  {
    value: 'openai-gpt-3.5-turbo',
    label: 'OpenAI GPT-3.5 Turbo',
  },
  {
    value: 'openai-gpt-4',
    label: 'OpenAI GPT-4',
  },
  {
    value: 'llama2.0',
    label: 'OLLaMA 2.0',
  },
];

let currentModel = models[0];

function getAllModels() {
  return models;
}

function getCurrentModel() {
  return currentModel;
}

function setCurrentModel(modelValue: string) {
  const model = models.find((m) => m.value === modelValue);
  if (model) {
    currentModel = { ...model };
  }

  return model;
}

export const modelRepository = {
  getAllModels,
  getCurrentModel,
  setCurrentModel,
};
