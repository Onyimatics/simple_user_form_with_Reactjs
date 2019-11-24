import { 
  SUBMIT_USER_SUCCESS,
 } from '../actionTypes';

 export const submitAction = formData => ({
  type: SUBMIT_USER_SUCCESS,
  payload: {
    status: 'submitSuccess',
    error: null,
    formData
  }
});
