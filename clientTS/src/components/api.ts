import type { AxiosResponse } from 'axios';
import type { newCardType, newResponseUser, signInFormType, signUpFormType } from './app.type';
import axiosInstance from '../axiosInstance';

export async function loadUser(): Promise<newResponseUser> {
  const result: AxiosResponse<newResponseUser> = await axiosInstance.get('/token/refresh');
  return result.data;
}

export async function regUser(
  event: React.FormEvent<HTMLFormElement>,
  signUpForm: signUpFormType,
): Promise<newResponseUser> {
  event.preventDefault();

  const result: AxiosResponse<newResponseUser> = await axiosInstance.post(
    '/auth/registration',
    signUpForm,
  );
  return result.data;
}

export async function logUser(
  event: React.FormEvent<HTMLFormElement>,
  signInForm: signInFormType,
): Promise<newResponseUser> {
  event.preventDefault();
  const result: AxiosResponse<newResponseUser> = await axiosInstance.post(
    '/auth/login',
    signInForm,
  );
  return result.data;
}

export async function loadCard(): Promise<newCardType[]> {
  const result: AxiosResponse<newCardType[]> = await axiosInstance.get('/cards');
  return result.data;
}
