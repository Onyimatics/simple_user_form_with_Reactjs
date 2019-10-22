import { SUBMIT_USER_SUCCESS } from '../actionTypes';

const initialState = {
    formData: [],
    error: null,
    status: 'rest'
  };

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SUBMIT_USER_SUCCESS :
        return {
          ...state,
          ...payload
        }
      default:
        return state;
    }
  };
  
  export default userReducer;