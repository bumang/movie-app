import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { MoviesResponse } from '../types/movies';

const nowPlayingMovies = async (): Promise<MoviesResponse> => {
  const response = await axiosClient.get<MoviesResponse>(API_ENDPOINTS.NOW_PLAYING, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const useNowPlayingMovies = (): UseQueryResult<MoviesResponse, Error> =>
  useQuery({
    queryFn: nowPlayingMovies,
    queryKey: [QUERY_KEYS.NOW_PLAYING],
  });
