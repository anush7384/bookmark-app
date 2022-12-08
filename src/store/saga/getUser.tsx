import { getSuggestedQuery } from "@testing-library/react";
import { put } from "redux-saga/effects";

import { actionTypes } from "../actionTypes";
import requestMethod from "../services/requestMethod";

export function* getUser(): any {
  if (localStorage.getItem("auth_token")) {
    try {
      let response = yield requestMethod("me", "GET", {});
      yield put({type:actionTypes.GET_USER_SUCCESS,payload:{
        user:response,
      }}); 
    } catch (error) {
      //yield put failure
    }
  }
}

export default getUser;
