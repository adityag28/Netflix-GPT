import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt="netflix background" />
            </div>
            <form className='w-3/12 absolute p-12 bg-black/70 text-white my-20 mx-auto right-0 left-0 flex flex-col'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input
                    type='text'
                    placeholder='Full Name'
                    required
                    className=' border-1 rounded-sm p-4 my-4'
                />}
                <input
                    type='text'
                    placeholder='Email or mobile number'
                    required
                    className=' border-1 rounded-sm p-4 my-4'
                />
                <input
                    type='password'
                    placeholder='Password'
                    required
                    className=' border-1 rounded-sm p-4 my-4'
                />
                <button
                    className='bg-red-600 border-none rounded-sm font-bold p-4 my-6 hover:cursor-pointer' type='submit'>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='text-gray-300 py-4 cursor-pointer font-bold' onClick={toggleSignIn}>
                    {isSignInForm ? ' New to Netflix? Sign up now' : 'Already on Netflix? Sign In'}
                </p>
            </form>
        </div >
    )
}

export default Login
