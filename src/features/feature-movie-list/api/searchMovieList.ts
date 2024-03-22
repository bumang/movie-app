import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

const searchList = async (params: any): Promise<any> => {
  const response = await axiosClient.get<any>(API_ENDPOINTS.SEARCH_LIST, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: 'en-US',
      page: 1,
      ...params,
    },
  });
  return response.data;
};

export const useSearchListQuery = (params: any): UseQueryResult<any, Error> =>
  useQuery({
    queryFn: () => searchList(params),
    queryKey: [QUERY_KEYS.SEARCH_LIST, params],
  });
