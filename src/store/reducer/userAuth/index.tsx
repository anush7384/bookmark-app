import { UserAuthStateType, UserAuthActionType } from "./types"
import {SIGNUP} from "../../actionTypes/index";

const initialState:UserAuthStateType = {
    signedUpUsers:[],
}

export const userAuth = (state = initialState, action:UserAuthActionType) => {
    switch (action.type) {
      case SIGNUP:
        return {
          ...state,
          signedUpUsers: [
            ...state.signedUpUsers,
            {
              name: action.payload.name,
              userName: action.payload.userName,
              password: action.payload.password,
            },
          ],
        };
        default:return state;
    }
}