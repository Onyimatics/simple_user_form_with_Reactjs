import { SUBMIT_USER_SUCCESS } from '../actionTypes';
import { SUBMIT_USER_FAILURE } from '../actionTypes';
import { FETCH_USER_SUCCESS } from '../actionTypes';
import { FETCH_USER_FAILURE } from '../actionTypes';

const initialState = {
    formData: [],
    error: null,
    status: 'rest'
  };

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SUBMIT_USER_FAILURE :
      case FETCH_USER_SUCCESS :
      case FETCH_USER_FAILURE :
        return {
          ...state,
          ...payload
        };
        case SUBMIT_USER_SUCCESS:
            return {
              ...state,
              ...payload,
              formData: [...payload.formData, ...state.formData]
            };
      default:
        return state;
    }
  };
  
  export default userReducer;