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
      webClientId: '1005803108156-jb0ss9b5muksm1jcfi9b84akkvkuet35.apps.googleusercontent.com',
    });
  });
  const googleLogin = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log('Id Token 1', idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('Succesfuuly Create a Google credential with the token  token:', googleCredential);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }



  //   console.log('FirebaseProvider',user)
  return (
    <FirebaseContext.Provider value={{
      user, setUser,
      signUpData, setSignUpData,

      //register
      login: async (values) => {
        try {
          await auth().signInWithEmailAndPassword(values.email, values.password);
          console.log('login  sucessfully ');
        } catch (e) {
          console.log('Please make account', e);
        }
      },
      // Google Account Login
      googleLogin,
      //createGoogleAccount
      createUserWithEmailAndPasswordFirebase: async (user) => {
        try {
          await
            auth()
              .createUserWithEmailAndPassword(user.email, user.password)
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }
                console.error(error);
              });
        } catch (error) {
          console.log('Problem in account!', error);

        }

      }



    }}>
      {children}
    </FirebaseContext.Provider>
  )
}

