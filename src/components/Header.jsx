import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO_URL, USER_AVATAR } from '../utils/constant';



const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error")
        });

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: USER_AVATAR,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsiubscribe when component unmounts
        return () => unsubscribed()
    }, []);

    return (
        <div className='absolute w-full py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img src={LOGO_URL} alt="Netflix Logo" className='w-45' />
            {user && <div className='flex flex-col items-center p-2'>
                <img
                    src={user.photoURL}
                    alt="usericon"
                    className='w-8'
                />
                <button
                    className='text-white font-bold cursor-pointer'
                    onClick={handleSignOut}
                >
                    Sign Out
                </button>
            </div>}
        </div>

    )
}

export default Header
