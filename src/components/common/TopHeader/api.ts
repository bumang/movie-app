import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { GenreListsResponse } from './types';

const genreList = async (): Promise<GenreListsResponse> => {
  const response = await axiosClient.get<GenreListsResponse>(API_ENDPOINTS.GENRE_LIST, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const useGenreListQuery = (): UseQueryResult<GenreListsResponse, Error> =>
  useQuery({
    queryFn: genreList,
    queryKey: [QUERY_KEYS.GENRE_LIST],
  });
