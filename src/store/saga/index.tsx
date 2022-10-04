import {takeEvery,takeLatest} from 'redux-saga/effects';

import {actionTypes} from '../actionTypes/index';
import registerUser from '../saga/register';
import loginUser from '../saga/login';
import createFolder from '../saga/createFolder';
import deleteFolder from './deleteFolder';
import  {getFolders}  from './getFolders';
import { renameFolder } from './renameFolder';
import {createBookmark} from './createBookmark';
import {deleteBookmark} from './deleteBookmark';
import getBookmarks from './getBookmarks';
import moveBookmark from './moveBookmark';
import getUser from './getUser';
import toggleFavorite from './toggleFavorite';

function* saga() {
    yield takeEvery(actionTypes.SIGNUP_REQUESTED,registerUser);
    yield takeEvery(actionTypes.LOGIN_REQUESTED,loginUser);
    yield takeEvery(actionTypes.CREATE_FOLDER_REQUEST,createFolder);
    yield takeEvery(actionTypes.DELETE_FOLDER_REQUEST,deleteFolder);
    yield takeEvery(actionTypes.GET_ALL_FOLDERS_REQUEST,getFolders);
    yield takeEvery(actionTypes.RENAME_FOLDER_REQUEST,renameFolder);
    yield takeEvery(actionTypes.CREATE_BOOKMARK_REQUEST,createBookmark);
    yield takeEvery(actionTypes.DELETE_BOOKMARK_REQUEST,deleteBookmark);
    yield takeEvery(actionTypes.GET_BOOKMARKS_REQUEST,getBookmarks);
    yield takeEvery(actionTypes.MOVE_BOOKMARK_REQUEST,moveBookmark);
    yield takeEvery(actionTypes.GET_USER_REQUEST,getUser); 
    yield takeEvery(actionTypes.TOGGLE_FAVORITE_REQUEST,toggleFavorite); 
}

export default saga;