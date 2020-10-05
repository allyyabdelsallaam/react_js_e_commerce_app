import React from 'react';
import './AuthPage.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { withRouter } from 'react-router-dom';


const AuthPage = () => (
    <div className='AuthPage'>
        <SignIn />
        <SignUp />
    </div>
)


export default AuthPage;