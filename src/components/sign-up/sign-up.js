import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-up.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase';


const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match!")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span className=''>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput type='text' name='displayName' value={displayName} handleChange={event => setDisplayName(event.target.value) } label='Display Name' required />
                <FormInput type='email' name='email' value={email} handleChange={event => setEmail(event.target.value)} label="Email" required />
                <FormInput type='password' name='password' value={password} handleChange={event => setPassword(event.target.value)} label="Password" required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={event => setConfirmPassword(event.target.value)} label="Confirm Password" required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;