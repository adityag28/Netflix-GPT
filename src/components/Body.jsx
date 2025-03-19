import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const Body = () => {
    const dispatch = useDispatch()



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, photoURL, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        name: displayName,
                        email: email,
                        photoURL: photoURL,
                    })
                );
            } else {
                dispatch(removeUser());
            }
        });


    }, []); // Add an empty dependency array



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/browse' element={<Browse />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Body

