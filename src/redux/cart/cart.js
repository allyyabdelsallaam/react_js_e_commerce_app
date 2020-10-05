import { toggle_cart_hidden, add_item, clear_item_from_cart, remove_item } from '../action/ActionTypes';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const initialState = {
  hidden: true,
  cartItems: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case toggle_cart_hidden:
      return { ...state, hidden: !state.hidden };

    case add_item:
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };

    case clear_item_from_cart:
      return { ...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id) }

    case remove_item:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) }

    default:
      return state
  }
};
