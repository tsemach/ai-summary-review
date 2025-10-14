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

export const reviewsApi = {
  fetchReviews,
  summarizeReviews,
};
