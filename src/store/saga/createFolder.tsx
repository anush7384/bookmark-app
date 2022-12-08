import {put} from 'redux-saga/effects';

import requestMethod from "../services/requestMethod";
import { createFolderFailure, createFolderSuccess } from '../actions';

interface ActionType{
    type:"CREATE_FOLDER_REQUEST",
    payload:{
        name:string,
    }
}

export function* createFolder(action:ActionType) : any {
    try{
        let obj = {
            name:action.payload.name,
        }
        let response = yield requestMethod("folder","POST",obj);
        yield put(createFolderSuccess(response)); 
    }
    catch(error){
        yield put(createFolderFailure(error));
    }
}

export default createFolder;