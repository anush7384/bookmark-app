import { actionTypes } from "../../actionTypes/index";

interface StateType {
  bookmarks: any[];
  bookmarkSpinner: boolean;
  folderId: string;
  folderName: string;
  processing: boolean;
  message: string;
  favorites: [];
  addFolderId:string;
  search: [];
  vertical:boolean,
  saving:boolean,
}
const initialState: StateType = {
  bookmarks: [],
  addFolderId:"",
  processing:false,
  bookmarkSpinner: false,
  folderId: "",
  folderName:"",
  message: "Click Folder to Load",
  favorites: [],
  search: [],
  vertical:true,
  saving:false,
};

export const bookmarkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_BOOKMARKS_REQUEST:
      return {
        ...state,
        bookmarkSpinner: true,
        folderId: action.payload.id,
        folderName: action.payload.name,
        addFolderId:action.payload.id,
      };
    case actionTypes.CREATE_BOOKMARK_REQUEST:
      return{
        ...state,
        saving:true,
        processing:true,
      }
    case actionTypes.CREATE_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks:
          action.payload.id === state.folderId
            ? [...state.bookmarks, action.payload.response]
            : [...state.bookmarks],
        saving:false,
        processing:false,
      };
    case actionTypes.GET_BOOKMARKS_SUCCESS:
      return {
        ...state,
        message: "No Bookmarks Found",
        bookmarkSpinner: false,
        bookmarks: action.payload.response,
      };
      case actionTypes.DELETE_BOOKMARK_REQUEST:
        return{
          ...state,
          processing:true,
        }
    case actionTypes.DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        processing:false,
        bookmarks: [
          ...state.bookmarks.filter(
            (bookmark: any) => bookmark.id !== action.payload.id
          ),
        ],
        favorites: [
          ...state.favorites.filter(
            (bookmark: any) => bookmark.id !== action.payload.id
          ),
        ],
      };
      case actionTypes.MOVE_BOOKMARK_REQUEST:
        return{
          ...state,
          processing:true,
        }
    case actionTypes.MOVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        processing:false,
        bookmarks: [
          ...state.bookmarks.filter(
            (bookmark: any) => bookmark.id !== action.payload.id
          ),
        ],
      };
    case actionTypes.TOGGLE_FAVORITE_REQUEST:
      return{
        ...state,
        processing:true,
      }
    case actionTypes.TOGGLE_FAVORITE_SUCCESS:
      return {
        ...state,
        processing:false,
        bookmarks: [
          ...state.bookmarks.map((bookmark: any) => {
            if (bookmark.id === action.payload.response.id)
              return {
                ...bookmark,
                isFavorite: action.payload.response.isFavorite,
              };
            return { ...bookmark };
          }),
        ],
      };
    case actionTypes.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.bookmark],
      };
    case actionTypes.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites.filter(
            (bookmark: any) => bookmark.id !== action.payload.id
          ),
        ],
      };
    case actionTypes.SHOW_FAVORITES:
      return {
        ...state,
        bookmarks: state.favorites,
      };
    case actionTypes.SEARCH_BOOKMARK:
      return {
        ...state,
        search: state.bookmarks,
        bookmarks: state.bookmarks.filter(
          (bookmark: any) => bookmark.name === action.payload.name
        ),
      };
    case actionTypes.CANCEL_SEARCH_BOOKMARK:
      return {
        ...state,
        bookmarks: state.search,
      };
      case actionTypes.TOGGLE_VIEW:
        return{
          ...state,
          vertical:!state.vertical,
        }
    default:
      return state;
  }
};
