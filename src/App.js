import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './screens/HomePage/HomePage';
import ShopPage from './screens/shop/Shop';
import AuthPage from './screens/AuthPage/AuthPage';
import CheckOut from './screens/checkout/checkout';
import Header from './components/header/header';

import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/action/users-action';
import { selectCurrentUser } from './redux/users/user-selector';

function App() {

  const { currentUser } = useSelector(state => ({
    currentUser: selectCurrentUser(state)
  }))

  const dispatch = useDispatch();

  var unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }))
        })
        //return
      }
      dispatch(setCurrentUser(userAuth));
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOut} />
        <Route exact path='/auth' render={() => currentUser ? <Redirect to='/' /> : <AuthPage />} />
      </Switch>
    </div>
  );
}

export default App;