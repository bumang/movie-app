import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { MoviesResponse } from '../types/movies';

const upcomingMovies = async (): Promise<MoviesResponse> => {
  const response = await axiosClient.get<MoviesResponse>(API_ENDPOINTS.UPCOMING, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const useUpcomingMoviesQuery = (): UseQueryResult<MoviesResponse, Error> =>
  useQuery({
    queryFn: upcomingMovies,
    queryKey: [QUERY_KEYS.UPCOMING],
  });
