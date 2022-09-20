import { UserAuthStateType, UserAuthActionType } from "./types"
import {actionTypes} from "../../actionTypes/index";

const initialState:UserAuthStateType = {
    signedUpUsers:[],
    error:"",
}

export const userAuth = (state = initialState, action:UserAuthActionType) => {
    switch (action.type) {
      // case actionTypes.SIGNUP_SUCCESS:
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          signedUpUsers: [...state.signedUpUsers, { ...action.payload.user }],
        };
      // case actionTypes.SIGNUP_FAILURE:
      case "SIGNUP_FAILURE":
        return {
          ...state,
          error: action.payload.message,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          signedUpUsers: [...state.signedUpUsers, { ...action.payload.user }],
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          error: action.payload.message,
        };
      default:
        return state;
    }
}