import { apiClient } from "./client";

const getCharactersList = (query?: string) => {
  return apiClient.get(`character/${query ? `?${query}` : ""}`);
};

const getCharacterById = (id: number) => {
  return apiClient.get(`character/${id}`);
};

const getCharacterSeenEpisode = (episodeId: number) => {
  return apiClient.get(`episode/${episodeId}`);
};

export const characterApi = {
  getCharactersList,
  getCharacterById,
  getCharacterSeenEpisode,
};
