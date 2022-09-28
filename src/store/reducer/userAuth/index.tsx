import { UserAuthStateType, UserAuthActionType } from "./types"

const initialState:UserAuthStateType = {
    users:[],
    user:{},
    error:"",
    loginSpinner:false,
    signUpSpinner:false,
}

export const userAuth = (state = initialState, action:UserAuthActionType) => {
    switch (action.type) {
      case "SIGNUP_REQUESTED":
        return {
          ...state,
          signUpSpinner: true,
        };
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          users: [...state.users, { ...action.payload.user }],
        };
      case "SIGNUP_FAILURE":
        return {
          ...state,
          error: action.payload.message,
        };
      case "LOGIN_REQUESTED":
        return {
          ...state,
          loginSpinner: true,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          users: [...state.users, { ...action.payload.user }],
          loginSpinner:false,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          error: action.payload.message,
        };
      case "GET_USER_SUCCESS":
        return{
          ...state,
          user:action.payload.user,
        }
      default:
        return state;
    }
}