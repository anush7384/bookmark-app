import { put } from "redux-saga/effects";

import { signUpSuccess, signUpFailure } from "../actions";
import requestMethod from "../services/requestMethod";

interface RegisterActionType {
  type: "SIGNUP_SUCCESS";
  payload: {
    user: {
      name: string;
      email: string;
      password: string;
    }[];
  };
}

function* registerUser(action: RegisterActionType): any {
  try {
    const obj = action.payload.user;
    let response = yield requestMethod("register", "POST", obj);
    if ("token" in response) {
      yield put(signUpSuccess(response));
      localStorage.setItem("auth_token",response.token);
    }
  } catch (error:any) {
    yield put(signUpFailure(error.message));
  }
}

export default registerUser;
