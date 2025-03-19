import React, { use, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }



    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleBtnClick = () => {

        const nameValue = isSignInForm ? "" : name.current.value || "";
        const message = checkValidData(nameValue, email.current.value, password.current.value, isSignInForm);
        setErrorMessage(message)
        if (message) return;
        if (!isSignInForm) {
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://media.licdn.com/dms/image/v2/D4D03AQHn_W4vcFi7UQ/profile-displayphoto-shrink_800_800/B4DZUXxcQqG8Ac-/0/1739860592736?e=1747872000&v=beta&t=ZeE27x60yiVsTS7v1pQ7zgjavs613MJNlM8NhNj3jKE"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, photoURL, displayName } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                photoURL: photoURL,
                                name: displayName
                            })
                        );
                        navigate('/browse')
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/browse')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " : " + errorMessage)

                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt="netflix background"
                />
            </div>
            <form
                onSubmit={(e) => { e.preventDefault() }}
                className='w-110 absolute p-12 bg-black/80 text-white my-20 mx-auto right-0 left-0 flex flex-col'
            >
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input
                    ref={name}
                    type='text'
                    placeholder='Full Name'
                    className=' border-1 rounded-sm p-4 my-4'
                    required
                    aria-label='Full Name'
                />}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email or mobile number'
                    className=' border-1 rounded-sm p-4 my-4'
                    required
                    aria-label='Email'
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className=' border-1 rounded-sm p-4 my-4'
                    required
                    aria-label='Email'
                />
                <button
                    onClick={handleBtnClick}
                    className='bg-red-600 border-none rounded-sm font-bold p-4 my-6 hover:cursor-pointer'>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='text-red-500 font-bold py-3 text-lg'>{errorMessage}</p>
                <p className='text-gray-300 py-4 cursor-pointer font-bold' onClick={toggleSignIn}>
                    {isSignInForm ? ' New to Netflix? Sign up now' : 'Already on Netflix? Sign In'}
                </p>
            </form>
        </div >
    )
}

export default Login
