import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import React from 'react'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';

const OAuth = () => {

  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL
          }),
          // console.log(result);
        })

      const data = await res.json();
      dispatch(signInSuccess(data));


    }
    catch (error) {
      console.error(
        'could not sign in with Google', error
      );
    }
  }


  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 items-center rounded-lg uppercase hover: opacity-95' >Continue with Google</button>
  )
}

export default OAuth