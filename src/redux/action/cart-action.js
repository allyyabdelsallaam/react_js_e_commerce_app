import { toggle_cart_hidden, add_item, clear_item_from_cart, remove_item } from './ActionTypes';

export const toggleCartHidden = () => ({ type: toggle_cart_hidden })

export const addItem = item => ({ type: add_item, payload: item })

export const clearItemFromCart = item => ({ type: clear_item_from_cart, payload: item })

export const removeItem = item => ({type: remove_item, payload: item})