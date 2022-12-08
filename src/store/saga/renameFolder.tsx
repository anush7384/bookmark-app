import { actionTypes } from "../actionTypes";
import requestMethod from "../services/requestMethod";
import {renameFolderSuccess,renameFolderFailure} from '../actions/index';
import { put } from "redux-saga/effects";

interface RenameActionType{
    type:"RENAME_FOLDER_REQUEST",
    payload:{
        obj:{
            folderId:string,
            name:string,
        }
    }
}

export function* renameFolder(action:RenameActionType):any{
    try {
        const newFolder = action.payload.obj;
        const response = yield requestMethod("rename-folder","PUT",newFolder);
        //success
        yield put(renameFolderSuccess(newFolder));

    } catch (error:any) {
        yield put(renameFolderFailure(error.message))
        //failure
    }

}