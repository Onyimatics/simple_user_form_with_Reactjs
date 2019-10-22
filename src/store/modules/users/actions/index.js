import { SUBMIT_USER_SUCCESS } from '../actionTypes';

 export const submitUserSuccess = formData => ({
  type: SUBMIT_USER_SUCCESS,
  payload: {
    status: 'submitSuccess',
    error: null,
    formData
  }
});

export const submitAction = (formData) =>  dispatch => {
    dispatch(submitUserSuccess(formData));
 }