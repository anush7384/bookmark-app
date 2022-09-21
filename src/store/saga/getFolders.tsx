import {put} from "redux-saga/effects";

import requestMethod from "../services/requestMethod";
import { getAllFoldersSuccess,getAllFoldersFailure } from "../actions";

export function* getFolders(): any {
    if(localStorage.getItem("auth_token")){
        try{
            let response = yield requestMethod("folders","GET",{});
            yield put(getAllFoldersSuccess(response));
        }
        catch(error){
            //yield put failure
        }
    }
}