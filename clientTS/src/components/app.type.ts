import { Dispatch, SetStateAction } from 'react';

export type newUsersType = {
  name: string;
  login: string;
  email: string;
  password: string;
  isAdmin: boolean;
} | null;

export type newResponseUser = {
  accessToken: string;
  user: newUsersType;
};

export type UserProps = {
  user: newUsersType | undefined;
  setUser: Dispatch<SetStateAction<newUsersType>>;
};

export type signUpFormType = {
  name: string;
  login: string;
  email: string;
  password: string;
  isAdmin: string;
};

export type signInFormType = {
  email: string;
  password: string;
};

export type newCardType = {
  id: number;
  name: string;
  img: string;
  price: string;
};
