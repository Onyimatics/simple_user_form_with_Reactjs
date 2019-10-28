import { 
  SUBMIT_USER_SUCCESS,
  SUBMIT_USER_FAILURE, 
  FETCH_USER_SUCCESS, 
  FETCH_USER_FAILURE
 } from '../actionTypes';

 export const submitUserSuccess = formData => ({
  type: SUBMIT_USER_SUCCESS,
  payload: {
    status: 'submitSuccess',
    error: null,
    formData
  }
});

export const submitUserFailure = () => ({
  type: SUBMIT_USER_FAILURE,
  payload: {
    status: 'submitFailure',
    error: true
  }
});

export const fetchUserSuccess = formData => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    status: 'fetchSuccess',
    error: null,
    formData
  }
});

export const fetchUserFailure = formData => ({
  type: FETCH_USER_FAILURE,
  payload: {
    status: 'fetchFailure',
    error: null,
    formData
  }
});

export const submitAction = (formData) => {
    return submitUserSuccess(formData);
 }


export const fetchAction = (formData) => {
  return submitUserSuccess(formData);
}
