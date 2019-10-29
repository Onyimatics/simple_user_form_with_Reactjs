import axios from 'axios';
import {
    eventChannel
} from 'redux-saga';
import qs from 'qs';
import {
    takeLatest,
    takeEvery,
    put,
    all,
    take,
    fork
} from 'redux-saga/effects';
// import {
//     submitAction
// } from '../store/modules/users/actions';
import firebase from './config';

function* startListener() {
    // #1
    const channel = new eventChannel(emiter => {
      const listener = firebase.database().ref("/users").on("value", snapshot => {
          console.log('code>>>>', snapshot.val())
        emiter({ data: snapshot.val() || {} });
      });
  
          // #2
      return () => {
        listener.off();
      };
    });
  
      // #3
    while (true) {
      const { data } = yield take(channel);
      const datum = Object.values(data)
   
      // #4
      yield put({
        type: 'SUBMIT_SUCCESS_ASYNC',
        payload: {
            formData: datum,
            error: null,
            status: 'submit_success'
        }
    });
    }
  }
  

function* userFormAsync(action) {
    try {
        yield axios({
            data: qs.stringify(action.payload.formData),
            method: 'POST',
            url: 'https://us-central1-user-form-c36c1.cloudfunctions.net/users',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        });

        yield put({
            type: 'SUBMIT_SUCCESS_ASYNC',
            payload: {
                formData: action.payload.formData,
                error: null,
                status: 'submit_success'
            }
        });
    } catch (error) {
        console.log(error.message);
    }
}

function* watchStartListener() {
    try {
        yield fork(startListener);
    } catch(error) {
        console.log(error.message);
        
    }
}

function* watchUserForm() {
    try {
    yield takeLatest('SUBMIT_USER_SUCCESS', userFormAsync)
    } catch(error) {
        console.log(error.message);
        
    }
}


export default function* rootSaga() {
    yield all([
        watchStartListener(),
        watchUserForm(),
    ])
}