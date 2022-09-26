import { put } from "redux-saga/effects";

import {actionTypes} from '../actionTypes/index';
import requestMethod from '../services/requestMethod';

interface ActionType{
    type:"GET_BOOKMARKS_REQUEST",
    payload:{
        id:string,
    }
}

function* getBookmarks(action:ActionType):any{
    try {
        let obj = {
          folderId: action.payload.id,
        };
        const url =`folder-bookmarks?"folderId"="${action.payload.id}"`
        let response = yield requestMethod(url,"GET",obj);
        yield put({type:actionTypes.GET_BOOKMARKS_SUCCESS,payload:{
            response:response,
        }});

    } catch (error:any) {
        yield put({type:actionTypes.GET_BOOKMARKS_FAILURE,
            payload:{
                error:error.message,
            }
        });
    }

}

export default getBookmarks;