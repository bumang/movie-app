import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { MoviesResponse } from '@/features/feature-home/types/movies';
import { axiosClient } from '@/services';

interface AllMoviesProps {
  with_genres: string;
}

const allMovies = async (params: AllMoviesProps): Promise<MoviesResponse> => {
  const response = await axiosClient.get<MoviesResponse>(API_ENDPOINTS.MOVIES, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
      ...params,
    },
  });
  return response.data;
};

export const useAllMoviesQuery = (params: AllMoviesProps): UseQueryResult<MoviesResponse, Error> =>
  useQuery({
    queryFn: () => allMovies(params),
    queryKey: [QUERY_KEYS.All_MOVIES, params.with_genres],
  });
