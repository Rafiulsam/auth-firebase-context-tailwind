import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const UserContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(() => {
        // Subscribe to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state changed', currentUser);
            setUser(currentUser)
        })
        // Unsubscribe from the authentication state changes when component unmounts
        return () => {
            unsubscribe() // Cleanup function to unsubscribe
        }
    }, [])
    /*
    *This useEffect hook subscribes to changes in the authentication state using Firebase's onAuthStateChanged method.It logs the current user whenever the authentication state changes.The unsubscribe function is returned to ensure cleanup when the component unmounts.
    */

    // Object containing user authentication information and methods
    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
    }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider >
    );
};

export default AuthProvider;