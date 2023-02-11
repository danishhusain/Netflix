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
import TabNavigator from './TabNavigator';
import RenderMoviesComponents from '../Screens/HomeScreen/renderMoviesComponents';
import Profile from '../Screens/ProfileScreen/Profile';
import MovieDetailPage from '../Screens/DownloadsScreen/MovieDetailPage';



const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {/* <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: true }} /> */}
            <Stack.Screen name='TabNavigator' component={TabNavigator} />
            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name='SearchScreen' component={Search} />
            <Stack.Screen name='ComingSoonScreen' component={ComingSoon} />
            <Stack.Screen name='DownloadsScreen' component={Downloads} />
            <Stack.Screen name='MoreScreen' component={More} />
            <Stack.Screen name='MainScreen' component={Main} />

            {/* home */}
            <Stack.Screen name='RenderMoviesComponents' component={RenderMoviesComponents} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='MovieDetailPage' component={MovieDetailPage} />
       

        </Stack.Navigator>

    )
}

export default Navigator