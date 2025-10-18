import axios from 'axios';

export type Review = {
  id: number;
  author: string;
  content: string;
  rating: number;
  createdAt: string;
};

export type GetReviewsResponse = {
  summary: string | null;
  reviews: Review[];
};

export type SummarizeResponse = {
  summary: string;
};

export type Model = {
  value: string;
  label: string;
};

export type GetModelsResponse = Model[];

function fetchReviews(productId: number) {
  return axios
    .get<GetReviewsResponse>(`/api/products/${productId}/reviews`)
    .then((res) => res.data);
}

function summarizeReviews(productId: number) {
  return axios
    .post<SummarizeResponse>(`/api/products/${productId}/reviews/summarize`)
    .then((res) => res.data);
}

function fetchModels() {
  return axios.get<GetModelsResponse>('/api/models').then((res) => res.data);
}

function fetchCurrentModel() {
  return axios.get<Model>('/api/models/current').then((res) => res.data);
}

function setCurrentModel(modelValue: string) {
  return axios
    .post('/api/models/current', { modelId: modelValue })
    .then((res) => res.data);
}

export const reviewsApi = {
  fetchReviews,
  summarizeReviews,
  fetchModels,
  fetchCurrentModel,
  setCurrentModel,
};
