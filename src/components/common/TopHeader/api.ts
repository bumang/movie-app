// import { useMutation, UseMutationResult } from '@tanstack/react-query';

// import { API_ENDPOINTS, QUERY_KEYS } from '@/constants';
// import { axiosClient } from '@/services';

// import { Logout, PostLogoutResponse } from './types';

// const logout = async (data: Partial<Logout>): Promise<PostLogoutResponse> => {
//   const response = await axiosClient.post<PostLogoutResponse>(API_ENDPOINTS.LOGOUT, data);
//   return response.data;
// };

// export const useLogoutMutation: () => UseMutationResult<
//   PostLogoutResponse,
//   Error,
//   Partial<Logout>,
//   unknown
// > = () =>
//   useMutation({
//     mutationFn: logout,
//     mutationKey: [QUERY_KEYS.LOGOUT],
//   });
