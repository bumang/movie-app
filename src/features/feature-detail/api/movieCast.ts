import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { CastResponse } from '../types/cast';

interface MovieDetailApiProps {
  id: string;
}

const movieCast = async (params: MovieDetailApiProps): Promise<CastResponse> => {
  const response = await axiosClient.get<CastResponse>(
    `${API_ENDPOINTS.MOVIE_DETAIL}${params.id}/credits`,
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

export const useMovieCastQuery = (
  params: MovieDetailApiProps
): UseQueryResult<CastResponse, Error> =>
  useQuery({
    queryFn: () => movieCast(params),
    queryKey: [QUERY_KEYS.CAST_DETAIL, params?.id],
    enabled: !!params.id,
  });
