import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CarDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss';
import { auth } from '../../firebase/firebase';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/users/user-selector';
import CartDropdown from '../cart-dropdown/cart-dropdown';


function Header() {

    const { currentUser, hidden } = useSelector(state => ({
        currentUser: selectCurrentUser(state),
        hidden: selectCartHidden(state)
    }))

    const [loggedOut, setLoggedOut] = useState(true);

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/auth'>SIGN IN</Link>
                }
                <CartIcon />
                {hidden ? null : <CartDropdown />}
            </div>
        </div>
    )
}


export default Header;