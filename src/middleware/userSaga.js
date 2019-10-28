import axios from 'axios';
import { eventChannel } from 'redux-saga'
import { takeLatest, put, all, take } from 'redux-saga/effects';
import { submitUserSuccess, fetchUserSuccess } from '../store/modules/users/actions';
import firebase from './config';

function* fetchAllUsersAsync() {
    const channel = new eventChannel(emiter => {
        const listener = firebase
            .database()
            .ref('/users')
            .on('value', snapshot => {
                emiter({ users: snapshot.val() || {} });
            });

        return () => {
            listener.off();
        };
    });

    while (true) {
        const { formData } = yield take(channel);
        Object.keys(formData).map(user => formData[user]);
        console.log(formData);
        yield put(fetchUserSuccess(formData));
    }
}

function* userFormAsync(action) {
    try {
        yield axios({
            data: action.payload.formData,
            method: 'post',
            url: 'https://us-central1-user-form-c36c1.cloudfunctions.net/users',
        });

        yield put(submitUserSuccess(action));
    } catch (error) {
        console.log(error.message);
    }
}

function* watchUserForm() {
    yield takeLatest(submitUserSuccess().type, userFormAsync)
}

function* watchFetchUser() {
    yield takeLatest(fetchUserSuccess().type, fetchAllUsersAsync)
}

export default function* rootSaga() {
    yield all([
        watchUserForm(),
        watchFetchUser(),
    ])
}
