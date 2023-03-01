import { configureStore } from '@reduxjs/toolkit'
import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'

export const FirebaseContext = createContext()
export default function FirebaseProvider({ children }) {
    const [user, setUser] = useState()
    const [signUpData, setSignUpData] = useState()
   
    //   console.log('FirebaseProvider',user)

    return (
        <FirebaseContext.Provider value={{
            user, setUser,
            signUpData, setSignUpData
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

