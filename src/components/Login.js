import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidData} from "../utils/Validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'; 
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { Bg_Url, User_AVATAR } from '../utils/Constants';

    

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true) 
    const [errorMessage,setErrorMessage] = useState(null)
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const ToggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    const handleclick = () => {
        const message = checkValidData(email.current.value, password.current.value, name.current ? name.current.value : "");
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
        createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL: User_AVATAR
              }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
                
                // Profile updated!
                // ...
              }).catch((error) => {
                setErrorMessage(error.message)
                // An error occurred
                // ...
              });

    // ...
        })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
        }else{
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
            
            const user = userCredential.user;
    // ...
  })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage)
  });
        }

    };
    
    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img className='' src={Bg_Url} alt="background img" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign in" : "Sign Up"}</h1>
               {!isSignInForm && <input
               ref={name}
                 type="text"
                 placeholder='Full Name'
                 className='p-4 my-2 w-full bg-black bg-opacity-65 '
                />}
               <input 
               ref={email}
                 type="text"
                 placeholder='Email or mobile number'
                 className='p-4 my-2 w-full bg-black bg-opacity-65 '
                />
                <input
                ref={password}
                 type="password"
                 placeholder='password' 
                 className='p-4 my-2 w-full bg-black bg-opacity-65' 
                />
                <p className='text-red-500 py-2 font-bold text-lg'>{errorMessage}</p>
                <button
                 className='bg-red-700 p-2 my-2 w-full' onClick={handleclick} >
                    {isSignInForm ? "Sign in" : "Sign Up"}
                </button>
                <p className='py-4' onClick={ToggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registred? Sign In now"}</p>
            </form>
        </div>
    );
};

export default Login;