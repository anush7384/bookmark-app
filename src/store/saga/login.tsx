import { put } from "redux-saga/effects";
import { redirect } from "react-router-dom";

import requestMethod from "../services/requestMethod";
import { loginSuccess, loginFailure } from "../actions";

function* loginUser(action: any): any {
  try {
    const data = action.payload;
    const response = yield requestMethod("login", "POST", data);
    if ("token" in response) {
      yield localStorage.setItem("auth_token", response.token);
      yield put(loginSuccess(response));
      // return redirect("/dashboard");
    }
    // yield put(loginFailure)
    
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export default loginUser;
