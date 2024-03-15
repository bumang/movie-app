import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { MovieDetailType } from '../types/movie';

interface MovieDetailApiProps {
  id: string;
}

const movieDetail = async (params: MovieDetailApiProps): Promise<MovieDetailType> => {
  const response = await axiosClient.get<MovieDetailType>(
    `${API_ENDPOINTS.MOVIE_DETAIL}${params.id}`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language: 'en-US',
        page: 1,
        ...params,
      },
    }
  );
  return response.data;
};

export const useMovieDetailQuery = (
  params: MovieDetailApiProps
): UseQueryResult<MovieDetailType, Error> =>
  useQuery({
    queryFn: () => movieDetail(params),
    queryKey: [QUERY_KEYS.MOVIE_DETAIL, params?.id],
    enabled: !!params.id,
  });
