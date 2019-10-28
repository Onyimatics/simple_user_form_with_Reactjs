import { SUBMIT_SUCCESS_ASYNC } from '../actionTypes';

const initialState = {
    formData: [],
    error: null,
    status: 'rest'
  };

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SUBMIT_SUCCESS_ASYNC :
        return {
          ...state,
          ...payload
        }
      default:
        return state;
    }
  };
  
  export default userReducer;