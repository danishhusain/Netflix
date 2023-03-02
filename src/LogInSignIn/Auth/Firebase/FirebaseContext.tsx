import { configureStore } from '@reduxjs/toolkit'
import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'
import auth, { firebase } from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-google-signin/google-signin';



export const FirebaseContext = createContext()
export default function FirebaseProvider({ children }) {
    const [user, setUser] = useState()
    const [signUpData, setSignUpData] = useState()
    ////UseEfffect for google signIn
    useEffect(() => {
        GoogleSignin.configure({
            // webClientId:'350073134414-s2n4voc1eof6fke7e4q126jv1a72a75q.apps.googleusercontent.com',
            webClientId:'350073134414-nke5nkmk1n0r8fu8b3c62v60hqg9uoph.apps.googleusercontent.com',
            offlineAccess: true,
        });
    });
    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            // setUser(userInfo);
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the sign-in flow
              console.log('Sign-in cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign-in) is in progress already
              console.log('Sign-in already in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
              console.log('Google Play services not available');
            } else {
              console.log('Error occurred:', error);
            }
          }
    }



    //   console.log('FirebaseProvider',user)
    return (
        <FirebaseContext.Provider value={{
            user, setUser,
            signUpData, setSignUpData,
            login: async (values) => {
                try {
                    await auth().signInWithEmailAndPassword(values.email, values.password);
                    console.log('login  sucessfully ');
                } catch (e) {
                    console.log('Please make account', e);
                }
            },
            googleLogin
            // Google Account Login



        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

