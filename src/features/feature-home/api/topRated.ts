import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { TopRatedMovieResponse } from '../types/topRated';

const topRatedMovies = async (): Promise<TopRatedMovieResponse> => {
  const response = await axiosClient.get<TopRatedMovieResponse>(API_ENDPOINTS.TOP_RATED, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const useTopRatedMoviesQuery = (): UseQueryResult<TopRatedMovieResponse, Error> =>
  useQuery({
    queryFn: topRatedMovies,
    queryKey: [QUERY_KEYS.TOP_RATED],
  });
