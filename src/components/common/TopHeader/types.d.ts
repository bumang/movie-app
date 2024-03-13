import { ApiResponse } from '@/services/types/api';

export interface Logout extends Record<string, unknown> {}

export interface LogoutResponse extends Record<string, unknown> {
  message: string;
}

export type PostLogoutResponse = ApiResponse<Partial<LogoutResponse>>;

export type GetLogoutResponse = ApiResponse<Logout[]>;

export type GetLogout = ApiResponse<Logout>;
