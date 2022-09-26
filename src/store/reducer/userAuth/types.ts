import { signUpSuccess } from "../../actions";

export interface UserAuthStateType {
  users: UserType[];
  error: string;
  loginSpinner: boolean;
  signUpSpinner: boolean;
}

export interface UserType {
  name: string;
  email: string;
  createdAt: any; // time type
  id: string;
  updatedAt: any; // time type
  deletedAt: any; //time type
  isEmailVerified: string;
  token: string;
}

type RegisterRequest = {
  type: "SIGNUP_REQUESTED";
};

type RegisterSuccess = {
  type: "SIGNUP_SUCCESS";
  payload: {
    user: UserType[];
  };
};

type RegisterFailure = {
  type: "SIGNUP_FAILURE";
  payload: {
    message: string;
  };
};

type LoginRequest = {
  type: "LOGIN_REQUESTED";
};

type LoginSuccess = {
  type: "LOGIN_SUCCESS";
  payload: {
    user: any[];
  };
};

type LoginFailure = {
  type: "LOGIN_FAILURE";
  payload: {
    message: string;
  };
};

export type UserAuthActionType =
  | RegisterSuccess
  | RegisterFailure
  | LoginSuccess
  | LoginFailure
  | RegisterRequest
  | LoginRequest;
