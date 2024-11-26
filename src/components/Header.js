import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTED_LANGUAGES } from '../utils/Constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const ShowLangauge = useSelector(store => store.gpt.showGptSearch)
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
  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e)=>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
    return (
        <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between '>
           <img 
           className='w-48' 
           src={Logo} alt="" /> 

           {user &&( <div className='flex p-2 py-4'>

           {  ShowLangauge && <select className='px-2 bg-black text-white rounded-lg' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifer} value={lang.identifer}>{lang.name}</option>
              ))}
            </select>}
            <button className='px-4 mx-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{ ShowLangauge ? "HomePage" : "GtpSearch"}</button>
            <img className='w-12 h-12 ' src={user?.photoURL} alt="user icon" />
           
           <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
           </div>)}
        </div>
    );
};

export default Header;