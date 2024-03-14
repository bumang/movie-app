import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { MoviesResponse } from '../types/movies';

const topRatedMovies = async (): Promise<MoviesResponse> => {
  const response = await axiosClient.get<MoviesResponse>(API_ENDPOINTS.TOP_RATED, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const useTopRatedMoviesQuery = (): UseQueryResult<MoviesResponse, Error> =>
  useQuery({
    queryFn: topRatedMovies,
    queryKey: [QUERY_KEYS.TOP_RATED],
  });
