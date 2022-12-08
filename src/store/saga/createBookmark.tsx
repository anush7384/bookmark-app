import { put } from "redux-saga/effects";
import { actionTypes } from "../actionTypes";

import requestMethod from "../services/requestMethod";

interface ActionType {
  type: "CREATE_BOOKMARK_REQUEST";
  payload: {
    bookmark: {
      url: string;
      name: string;
      folderId: string;
    };
  };
}

export function* createBookmark(action: ActionType): any {
  try {
    let obj = {
      url: action.payload.bookmark.url,
      name: action.payload.bookmark.name,
    };
    let response = yield requestMethod("bookmark", "POST", obj);
    let objMove = {
      folderId: action.payload.bookmark.folderId,
      bookmarkId: response.id,
    };
    let response2 = yield requestMethod("move-bookmark", "PATCH", objMove);
    yield put({
      type: actionTypes.CREATE_BOOKMARK_SUCCESS,
      payload: {
        id: response2.folder.id,
        response: response,
      },
    });
  } catch (error: any) {
    yield put({
      type: actionTypes.CREATE_BOOKMARK_FAILURE,
      payload: {
        error: error.message,
      },
    });
  }
}
