import { set_current_user } from '../action/ActionTypes';

const initialState = {
  currentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case set_current_user:
      return { ...state, currentUser: action.payload };

    default:
      return state
  }
};