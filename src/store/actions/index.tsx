import { actionTypes } from "./../actionTypes/index";
import { UserType } from "../reducer/userAuth/types";

export const signUpSuccess = (user: UserType) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: {
      user: user,
    },
  };
};

export const signUpFailure = (msg: string) => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    payload: {
      message: msg,
    },
  };
};

interface SignUpUserType {
  name: string;
  email: string;
  password: string;
}

export const signUpRequest = (obj: SignUpUserType) => {
  return {
    type: actionTypes.SIGNUP_REQUESTED,
    payload: {
      user: obj,
    },
  };
};

interface LoginType {
  email: string;
  password: string;
}

export const loginRequest = (obj: LoginType) => {
  return {
    type: actionTypes.LOGIN_REQUESTED,
    payload: obj,
  };
};

export const loginSuccess = (user: any) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      user: user,
    },
  };
};

export const loginFailure = (msg: string) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: {
      message: msg,
    },
  };
};

export const createFolderRequest = (name: string) => {
  return {
    type: actionTypes.CREATE_FOLDER_REQUEST,
    payload: {
      name: name,
    },
  };
};

export const createFolderSuccess = (response: any) => {
  return {
    type: actionTypes.CREATE_FOLDER_SUCCESS,
    payload: { folder: response },
  };
};

export const deleteFolderRequest = (id:string) => {
  return{
    type:actionTypes.DELETE_FOLDER_REQUEST,
    payload:{
      id:id,
    }
  }
};

export const deleteFolderSuccess = (id:string) => {
  return{
    type:actionTypes.DELETE_FOLDER_SUCCESS,
    payload:{
      id:id,
    }
  };
}

export const deleteFolderFailure = () => {
  return{
    type:actionTypes.DELETE_FOLDER_FAILURE,
  }
}

export const createFolderFailure = (error: any) => {
  return {
    type: actionTypes.CREATE_FOLDER_FAILURE,
    payload: { error: error },
  };
};

export const requestAllFolders = () => {
  return {
    type: actionTypes.GET_ALL_FOLDERS_REQUEST,
  };
};

export const getAllFoldersSuccess = (folders: any) => {
  return {
    type: actionTypes.GET_ALL_FOLDERS_SUCCESS,
    payload: { folders: folders },
  };
};

export const getAllFoldersFailure = (error: string) => {
  return {
    type: actionTypes.GET_ALL_FOLDERS_FAILURE,
    payload: {
      error: error,
    },
  };
};

interface ObjType {
  folderId: string;
  name: string;
}

export const renameFolderRequest = (obj: ObjType) => {
  return {
    type: actionTypes.RENAME_FOLDER_REQUEST,
    payload: {
      obj: obj,
    },
  };
};

export const renameFolderSuccess = (obj: ObjType) => {
  return {
    type: actionTypes.RENAME_FOLDER_SUCCESS,
    payload: {
      obj: obj,
    },
  };
};

export const renameFolderFailure = (error: string) => {
  return {
    type: actionTypes.RENAME_FOLDER_FAILURE,
    payload: {
      error: error,
    },
  };
};

interface BookmarkType {
  url: string;
  name: string;
  folderId:string;
}

export const createBookmarkRequest = (bookmark: BookmarkType) => {
  return {
    type: actionTypes.CREATE_BOOKMARK_REQUEST,
    payload: {
      bookmark: bookmark,
    },
  };
};

export const deleteBookmarkRequest = (id:string) => {
  return{
    type:actionTypes.DELETE_BOOKMARK_REQUEST,
    payload:{
      id:id,
    },
  };
};

export const getBookmarksRequest =(folderId:string) =>{
  return{
    type:actionTypes.GET_BOOKMARKS_REQUEST,
    payload:{
      id:folderId,
    },
  };
};

interface MoveType{
  folderId:string,
  bookmarkId:string,
}

export const moveBookmarkRequest = (obj:MoveType) =>{
  return{
    type:actionTypes.MOVE_BOOKMARK_REQUEST,
    payload:{
      obj:obj,
    },
  };
};
