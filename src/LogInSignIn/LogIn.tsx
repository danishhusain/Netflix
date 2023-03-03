

import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import CustomSighnUp from './CustomLogInSignUp/CustomSighnUp'
import { IconButton } from 'react-native-paper'
import CustomLogIn from './CustomLogInSignUp/CustomLogIn'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const LogIn = () => {
    
    return (
        <View style={{ flex: 1, bottom: '10%', top: '10%' }}>
            {/* 1 */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <IconButton icon={'netflix'} size={80} iconColor={'red'} />

            </View>
            {/* 2 */}
            <View style={{ alignSelf: 'center', marginBottom: '5%' }}>
                <Text style={{}}>Start your 60 days free trail</Text>

            </View>
            {/* 3 */}
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <CustomLogIn  />
            </View>
            
        </View>
    )
}

export default LogIn