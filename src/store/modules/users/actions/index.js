import { 
  SUBMIT_USER_SUCCESS,
  SUBMIT_USER_FAILURE
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




export const submitAction = (formData) => {
    return submitUserSuccess(formData);
 }

