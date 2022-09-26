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
        let response = yield requestMethod("folder","DELETE",obj);
        yield put(deleteFolderSuccess(id));
    } catch (error) {
        yield put(deleteFolderFailure());
    }
}

export default deleteFolder;