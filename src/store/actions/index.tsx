import {SIGNUP} from './../actionTypes/index';

interface DetailsType {
  name: string;
  userName: string;
  password: string;
};

export const signUp = (details: DetailsType) => {
  return {
    type: SIGNUP,
    payload: {
      name: details.name,
      userName: details.userName,
      password: details.password,
    },
  };
};

