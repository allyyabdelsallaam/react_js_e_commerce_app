import React, { useState } from 'react';
import './sign-in.scss';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase';


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput name='email' label='Email' type='email' value={email} handleChange={event => setEmail(event.target.value)} required />
                <FormInput name='password' label='Password' type='password' value={password} handleChange={event => setPassword(event.target.value)} required />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignIn