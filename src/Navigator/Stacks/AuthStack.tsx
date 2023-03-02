import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../LogInSignIn/LogIn';
import CreateUserWithEmailAndPassword from '../../LogInSignIn/Auth/Firebase/CreateUserWithEmailAndPassword';
import SignUp from '../../LogInSignIn/SignUp';
import CustomLogIn from '../../LogInSignIn/CustomLogInSignUp/CustomLogIn';

export default function AuthStack() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='LogIn' component={LogIn} />
    <Stack.Screen name='CreateUserWithEmailAndPassword' component={CreateUserWithEmailAndPassword} />
    <Stack.Screen name='CustomLogIn' component={CustomLogIn} />
    <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>

  )
}