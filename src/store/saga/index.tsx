import {takeEvery,takeLatest} from 'redux-saga/effects';

import {actionTypes} from '../actionTypes/index';
import registerUser from '../saga/register';
import loginUser from '../saga/login';

function* saga() {
    yield takeEvery(actionTypes.SIGNUP_REQUESTED,registerUser);
    yield takeEvery(actionTypes.LOGIN_REQUESTED,loginUser);
}

export default saga;