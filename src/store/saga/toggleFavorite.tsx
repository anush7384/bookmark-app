import { put } from "redux-saga/effects";
import requestMethod from "../services/requestMethod";

interface actionType {
  type: "TOGGLE_FAVORITE_REQUEST"
  payload: {
    id: string;
  };
}
function* toggleFavorite(action: actionType):any {
    try {
        let obj = {
            bookmarkId:action.payload.id,
        }
        let response = yield requestMethod("toggle-favorite","PUT",obj);
        yield put({type:"TOGGLE_FAVORITE_SUCCESS",payload:{
            response:response,
        }})
        if(response.isFavorite===true){
            yield put({type:"ADD_TO_FAVORITE",payload:{
                bookmark:response,
            }})
        }
        else{
            yield put({type:"REMOVE_FROM_FAVORITE",payload:{
                id:response.id,
            }})
        }
    } catch (error) {
        yield put({type:"TOGGLE_FAVORITE_FAILURE"});
    }
}

export default toggleFavorite;
