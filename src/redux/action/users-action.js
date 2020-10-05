import { set_current_user } from './ActionTypes';


export const setCurrentUser = user => ({ type: set_current_user, payload: user })