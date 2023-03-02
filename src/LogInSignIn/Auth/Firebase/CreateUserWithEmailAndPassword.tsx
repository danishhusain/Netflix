import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native-paper'
import { FirebaseContext } from './FirebaseContext'
import { useNavigation } from '@react-navigation/native'
import SignUp from '../../SignUp'
import auth, { firebase } from '@react-native-firebase/auth';


const CreateUserWithEmailAndPassword = () => {
  const navigation = useNavigation()
  const { user, setUser, } = useContext(FirebaseContext)

  useEffect(() => {

    { user && createUserWithEmailAndPasswordFirebase(user) }
  })

  const createUserWithEmailAndPasswordFirebase = async (user) => {
      try {
        auth()
          .createUserWithEmailAndPassword(`${user.email}`, `${user.password}`)
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

  



  // console.log('CreateUserWithEmailAndPassword', user)
  // console.log('CreateUserWithEmailAndPassword', user.email)
  return (
    <View>
      <Text>CreateUserWithEmail&Password</Text>
      {/* <Button onPress={()=>setUser('1')}>jo</Button> */}
      <Button onPress={() => navigation.navigate(SignUp)}>jo</Button>
      {/* <Button onPress={() => createUserWithEmailAndPasswordFirebase}>jo</Button> */}
    </View>
  )
}

export default CreateUserWithEmailAndPassword