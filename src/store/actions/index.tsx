import { actionTypes } from "./../actionTypes/index";
import { UserType } from "../reducer/userAuth/types";

export const signUpSuccess = (user: UserType) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: {
      user: user,
    },
  };
};

export const signUpFailure = (msg: string) => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    payload: {
      message: msg,
    },
  };
};

interface SignUpUserType{
  name:string,
  email:string,
  password:string,
}

export const signUpRequest = (obj: SignUpUserType) => {
  return {
    type: actionTypes.SIGNUP_REQUESTED,
    payload: {
      user:obj,
  },
}
};

export const loginRequest = (obj: any) => {
  return {
    type: actionTypes.LOGIN_REQUESTED,
    payload: obj,
  };
};

export const loginSuccess = (user: any) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      user: user,
    },
  };
};

export const loginFailure = (msg:string) => {
  return{
    type:actionTypes.LOGIN_FAILURE,
    payload:{
      message:msg,
    }
  }
}
