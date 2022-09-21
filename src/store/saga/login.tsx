import { put } from "redux-saga/effects";

import requestMethod from "../services/requestMethod";
import { loginSuccess, loginFailure } from "../actions";

function* loginUser(action: any): any {
  try {
    const data = action.payload;
    const response = yield requestMethod("login", "POST", data);
    if ("token" in response) {
      yield put(loginSuccess(response));
      localStorage.setItem("auth_token", response.token);
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export default loginUser;
