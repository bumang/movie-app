import { ApiResponse } from '@/services/types/api';

export interface Login extends Record<string, unknown> {
  username: string;
  password: string;
}

export interface LoginResponse extends Record<string, unknown> {
  token: string;
  role?: string;
  roleId?: string;
}

export type PostLoginResponse = ApiResponse<Partial<LoginResponse>>;

export type GetLoginsResponse = ApiResponse<Login[]>;

export type GetLogin = ApiResponse<Login>;
