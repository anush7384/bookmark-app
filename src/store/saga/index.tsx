import {takeEvery,takeLatest} from 'redux-saga/effects';

import {actionTypes} from '../actionTypes/index';
import registerUser from '../saga/register';
import loginUser from '../saga/login';
import createFolder from '../saga/createFolder';
import  {getFolders}  from './getFolders';
import { renameFolder } from './renameFolder';

function* saga() {
    yield takeEvery(actionTypes.SIGNUP_REQUESTED,registerUser);
    yield takeEvery(actionTypes.LOGIN_REQUESTED,loginUser);
    yield takeEvery(actionTypes.CREATE_FOLDER_REQUEST,createFolder);
    yield takeEvery(actionTypes.GET_ALL_FOLDERS_REQUEST,getFolders);
    yield takeEvery(actionTypes.RENAME_FOLDER_REQUEST,renameFolder);
}

export default saga;