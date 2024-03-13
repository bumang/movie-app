import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
import { axiosClient } from '@/services';

import { Login, PostLoginResponse } from '../types/login';

const login = async (data: Partial<Login>): Promise<PostLoginResponse> => {
  const response = await axiosClient.post<PostLoginResponse>(API_ENDPOINTS.LOGIN, data);
  return response.data;
};

export const useLoginMutation: () => UseMutationResult<
  PostLoginResponse,
  Error,
  Partial<Login>,
  unknown
> = () =>
  useMutation({
    mutationFn: login,
    mutationKey: [QUERY_KEYS.LOGIN],
  });
