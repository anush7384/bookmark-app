import { signUpSuccess } from "../../actions";

export interface UserAuthStateType {
  // signedUpUsers: {
  //   name: string;
  //   userName: string;
  //   password: string;
  // }[],
  signedUpUsers:UserType[],
  error:string,
}

export interface UserType{
  name:string,
  email:string,
  createdAt:string,
  id:string,
  updatedAt:string,
  deletedAt:string,
  isEmailVerified:string,
  token:string,
}

type RegisterSuccess = {
  type:"SIGNUP_SUCCESS",
  payload:{
    user:UserType[],
  }
};
type RegisterFailure = {
  type:"SIGNUP_FAILURE",
  payload:{
    message:string,
  }
}
type LoginSuccess = {
  type:"LOGIN_SUCCESS",
  payload:{
    user:any[],
  }
}
type LoginFailure = {
  type:"LOGIN_FAILURE",
  payload:{
    message:string,
  }
}
export type UserAuthActionType = RegisterSuccess|RegisterFailure|LoginSuccess|LoginFailure;