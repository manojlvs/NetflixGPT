import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const ToggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background img" />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign in" : "Sign Up"}</h1>
               {!isSignInForm && <input
                 type="text"
                 placeholder='Full Name'
                 className='p-4 my-2 w-full bg-black bg-opacity-65 '
                />}
                <input
                 type="text"
                 placeholder='Email or mobile number'
                 className='p-4 my-2 w-full bg-black bg-opacity-65 '
                />
                <input
                 type="text"
                 placeholder='password' 
                 className='p-4 my-2 w-full bg-black bg-opacity-65' 
                />
                <button
                 className='bg-red-700 p-2 my-2 w-full'>
                    {isSignInForm ? "Sign in" : "Sign Up"}
                </button>
                <p className='py-4' onClick={ToggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registred? Sign In now"}</p>
            </form>
        </div>
    );
};

export default Login;