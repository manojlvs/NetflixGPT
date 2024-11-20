import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/Constants';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate('/error')
          });
    }
    useEffect(()=>{
     const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
      const {uid, email, displayName, photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
      navigate("/browse")

  } else {
      dispatch(removeUser());
      navigate("/")
}
});
  return () => unSubscribe();
  },[])
    return (
        <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
           <img 
           className='w-48' 
           src={Logo} alt="" /> 

           {user &&( <div className='flex p-2'>
            <img className='w-12 h-12 ' src={user?.photoURL} alt="user icon" />
           
           <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
           </div>)}
        </div>
    );
};

export default Header;