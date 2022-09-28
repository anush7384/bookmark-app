import { actionTypes } from "../../actionTypes/index";

interface StateType {
  bookmarks: any[];
  bookmarkSpinner: boolean;
}
const initialState = {
  bookmarks: [],
  bookmarkSpinner: false,
};

export const bookmarkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_BOOKMARKS_REQUEST:
      return{
        ...state,
        bookmarkSpinner:true,
      }
    case actionTypes.GET_BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks: action.payload.response,
        bookmarkSpinner:false,
      };
    default:
      return state;
  }
};
