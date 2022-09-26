import { put } from "redux-saga/effects";

import { actionTypes } from "../actionTypes";
import requestMethod from "../services/requestMethod";

interface ActionType{
    type:"DELETE_BOOKMARK_REQUEST",
    payload:{
        id:string,
    }
}

export function* deleteBookmark(action:ActionType):any{
    try {
        let obj = {
            bookmarkId:action.payload.id,
        };
        let response = yield requestMethod("bookmark","DELETE",obj);
        yield put({type:actionTypes.DELETE_BOOKMARK_SUCCESS,payload:{
            response:response,
        }});
    } catch (error:any) {
        yield put({type:actionTypes.DELETE_BOOKMARK_FAILURE,payload:{
            error:error.message,
        }})
    }
}