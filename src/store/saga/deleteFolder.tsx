import { put } from "redux-saga/effects";

import { deleteFolderSuccess,deleteFolderFailure } from "../actions";
import requestMethod from '../services/requestMethod';

interface ActionType{
    type:"DELETE_FOLDER_REQUEST",
    payload:{
        id:string,
    }
}

function* deleteFolder(action:ActionType):any{
    try {
        let id = action.payload.id;
        let obj = {
            folderId:id,
        }
        const url = `folder-bookmarks?folderId=${action.payload.id}`;
        let response = yield requestMethod(url, "GET", obj);
        if(response.length()>0){
         yield requestMethod("folder","DELETE",obj);
        yield put(deleteFolderSuccess(id));}
        else
        yield put(deleteFolderFailure());
    } catch (error) {
        yield put(deleteFolderFailure());
    }
}

export default deleteFolder;