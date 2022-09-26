import { put } from "redux-saga/effects";
import { actionTypes } from "../actionTypes";

import requestMethod from '../services/requestMethod';

interface ActionType{
    type:"CREATE_BOOKMARK_REQUEST",
    payload:{
        bookmark:{
            url:string,
            name:string,
        }
    }
}

export function* createBookmark(action:ActionType):any{
    try {
        let obj = action.payload.bookmark;
        let response = yield requestMethod("bookmark","POST",obj);
        yield put({type:actionTypes.CREATE_BOOKMARK_SUCCESS,payload:{
            response:response,
        }});
        
    } catch (error:any) {
        yield put({type:actionTypes.CREATE_BOOKMARK_FAILURE,payload:{
            error:error.message,
        }});
    }
}