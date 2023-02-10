import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/Home';
import Search from '../Screens/SearchScreen/Search';
import ComingSoon from '../Screens/ComingSoonScreen/ComingSoon';
import Downloads from '../Screens/DownloadsScreen/Downloads';
import More from '../Screens/MoreScreen/More';
import Main from '../Screens/MainScreen/Main';
import renderMoviesComponents from '../Screens/HomeScreen/renderMoviesComponents';



const Navigator = () => {
    const Stack = createNativeStackNavigator();
   
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>

            {/* <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: true }} /> */}
            <Stack.Screen  name='HomeScreen' component={Home}  />
            <Stack.Screen name='SearchScreen' component={Search}  />
            <Stack.Screen name='ComingSoonScreen' component={ComingSoon}  />
            <Stack.Screen name='DownloadsScreen' component={Downloads}  />
            <Stack.Screen name='MoreScreen' component={More}  />
            <Stack.Screen name='MainScreen' component={Main}  />
            {/* home */}
            <Stack.Screen name='renderMoviesComponents' component={renderMoviesComponents}  />

        </Stack.Navigator>

    )
}

export default Navigator