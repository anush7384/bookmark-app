import { put } from "redux-saga/effects";

import requestMethod from "../services/requestMethod";
import { actionTypes } from "../actionTypes";

interface ActionType{
    type:"MOVE_BOOKMARK_REQUEST",
    payload:{
        obj:{
            folderId:string,
            bookmarkId:string,
        }
    }
}

function* moveBookmark(action:ActionType){
    try {
        let obj = action.payload.obj;
        let response = requestMethod("move-bookmark","PATCH",obj);
        yield put({type:actionTypes.MOVE_BOOKMARK_SUCCESS,payload:{
            id:obj.bookmarkId,
        }})
    } catch (error:any) {
        yield put({type:actionTypes.MOVE_BOOKMARK_FAILURE,payload:{
            error:error.messsage,
        }});
    }
}

export default moveBookmark;
