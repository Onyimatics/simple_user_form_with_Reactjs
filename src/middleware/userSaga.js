import { takeLatest, put } from 'redux-saga/effects';
import { submitUserSuccess } from '../store/modules/users/actions';
import { SUBMIT_SUCCESS_ASYNC } from '../store/modules/users/actionTypes';


function* userFormAsync(action) {
    const dispatched = {
        type: SUBMIT_SUCCESS_ASYNC,
        payload: {
            formData: action.payload.formData,
            status: action.payload.status,
            error: action.payload.error
        }
    }
    yield put(dispatched)
}

export function* watchUserForm() {
    yield takeLatest(submitUserSuccess().type, userFormAsync)
}