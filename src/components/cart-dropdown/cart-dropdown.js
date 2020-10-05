import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/action/cart-action';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.scss';


const CartDropdown = ({history}) => {

    const {cartItems} = useSelector(state => ({
        cartItems: selectCartItems(state)
    }))
    
    const dispatch = useDispatch();

    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden());
                }} >GO TO CHECK OUT</CustomButton>
        </div>
    )
}


export default withRouter(CartDropdown);