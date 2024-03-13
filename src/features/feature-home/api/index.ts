import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { axiosClient } from '@/services';

const products = async (data: any): Promise<any> => {
  const response = await axiosClient.get<any>('/products', data);
  return response.data;
};

export const useTestQuery = (): UseQueryResult<any[], Error> =>
  useQuery({
    queryFn: products,
    queryKey: ['products'],
  });
