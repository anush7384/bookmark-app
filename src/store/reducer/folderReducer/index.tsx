import { actionTypes } from "../../actionTypes/index";

interface StateType {
  folders: any[];
  error: string;
  folderSpinner: boolean;
  folderLoading:boolean;
  Loading:boolean;
  search: [];
  deleteFail:boolean;
}

const initialState: StateType = {
  folders: [],
  deleteFail:false,
  Loading:false,
  folderLoading:false,
  error: "",
  folderSpinner: false,
  search: [],
};

type UserType = {
  name: string;
  email: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  deletedAt: string;
  isEmailVerified: string;
};

type FolderType = {
  id: string;
  name: string;
  user: UserType;
  createdAt: any; /// time type
  updatedAt: string;
  deletedAt: string;
};

type CreateSuccess = {
  type: "CREATE_FOLDER_SUCCESS";
  payload: {
    folder: FolderType;
  };
};

type CreateFailure = {
  type: "CREATE_FOLDER_FAILURE";
  payload: {
    error: string;
  };
};

type FoldersType = {
  name: string;
  id: string;
  createdAt: any; //time type
}[];

type FoldersSuccess = {
  type: "GET_ALL_FOLDERS_SUCCESS";
  payload: {
    folders: FoldersType[];
  };
};

type FoldersFailure = {
  type: "GET_ALL_FOLDERS_FAILURE";
  payload: {
    error: string;
  };
};

type FolderReducerAction =
  | CreateSuccess
  | CreateFailure
  | FoldersSuccess
  | FoldersFailure;

//actiontype error if any no issue else prob//

export const folderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.CREATE_FOLDER_REQUEST:
      return{
        ...state,
        folderLoading:true,
      }
    case actionTypes.CREATE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [...state.folders, action.payload.folder],
        folderLoading:false,
      };
    case actionTypes.CREATE_FOLDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        folderLoading:false,
      };
      case actionTypes.DELETE_FOLDER_REQUEST:
        return{
          ...state,
          Loading:true,
        }
    case actionTypes.DELETE_FOLDER_SUCCESS:
      return {
        ...state,
        folders: state.folders.filter(
          (folder: any) => folder.id !== action.payload.id
        ),
        Loading:false,
      };
    case actionTypes.DELETE_FOLDER_FAILURE:
      return{
        ...state,
        Loading:false,
        deleteFail:true,
      }
    case actionTypes.GET_ALL_FOLDERS_REQUEST:
      return {
        ...state,
        folderSpinner: true,
      };
    case actionTypes.GET_ALL_FOLDERS_SUCCESS:
      return {
        ...state,
        folders: action.payload.folders,
        folderSpinner: false,
      };
    case actionTypes.GET_ALL_FOLDERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case actionTypes.RENAME_FOLDER_REQUEST:
      return {
        ...state,
        Loading:true,
      };
    case actionTypes.RENAME_FOLDER_SUCCESS:
      return {
        ...state,
        folders: [
          ...state.folders.map((folder: FolderType) => {
            if (folder.id === action.payload.obj.folderId)
              return { ...folder, name: action.payload.obj.name };
            else return { ...folder };
          }),
        ],
        Loading:false,
      };
    case actionTypes.RENAME_FOLDER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case actionTypes.SEARCH_FOLDER:
      return {
        ...state,
        search: state.folders,
        folders: state.folders.filter(
          (folder) => folder.name === action.payload.name
        ),
      };
    case actionTypes.CANCEL_SEARCH_FOLDER:
      return {
        ...state,
        folders: state.search,
      };
    case actionTypes.CANCEL_DELETE_ALERT:
      return{
        ...state,
        deleteFail:false,
      }
    default:
      return state;
  }
};
