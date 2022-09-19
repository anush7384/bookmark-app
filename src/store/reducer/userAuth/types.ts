import { signUp } from "../../actions";

export interface UserAuthStateType {
  signedUpUsers: {
    name: string;
    userName: string;
    password: string;
  }[];
}

export type UserAuthActionType = ReturnType<typeof signUp>;