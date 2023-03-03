// import { View, Text } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Screens/HomeScreen/Home';
// import Search from '../Screens/SearchScreen/Search';
// import ComingSoon from '../Screens/ComingSoonScreen/ComingSoon';
// import Downloads from '../Screens/DownloadsScreen/Downloads';
// import More from '../Screens/MoreScreen/More';
// import Main from '../Screens/MainScreen/Main';
// import TabNavigator from './TabNavigator';
// import Profile from '../Screens/ProfileScreen/Profile';
// import RenderMoviesComponents from '../Screens/HomeScreen/RenderMoviesComponents';
// import MovieDetailPage from '../Screens/DownloadsScreen/MovieDetailPage';
// import Play from '../Screens/PlayScreen/Play';
// import Loader from '../Loader/Loader';
// import MyList from '../Screens/HomeScreen/MyList';
// import LogIn from '../LogInSignIn/LogIn';
// import SignUp from '../LogInSignIn/SignUp';
// import CreateUserWithEmailAndPassword from '../LogInSignIn/Auth/Firebase/CreateUserWithEmailAndPassword';



// const Navigator = () => {
//     const Stack = createNativeStackNavigator();


//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>

//             <Stack.Screen name='LogIn' component={LogIn} />
//             <Stack.Screen name='CreateUserWithEmailAndPassword' component={CreateUserWithEmailAndPassword} />
//             <Stack.Screen name='SignUp' component={SignUp} />
//             {/* <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: true }} /> */}
//             {/* <Stack.Screen name='TabNavigator' component={TabNavigator} /> */}
//             {/* <Stack.Screen name='HomeScreen' component={Home} />

//             <Stack.Screen name='SearchScreen' component={Search} />
//             <Stack.Screen name='ComingSoonScreen' component={ComingSoon} />
//             <Stack.Screen name='DownloadsScreen' component={Downloads} />
//             <Stack.Screen name='MoreScreen' component={More} />
//             <Stack.Screen name='MainScreen' component={Main} /> */}

//             {/* home */}
//             {/* <Stack.Screen name='RenderMoviesComponents' component={RenderMoviesComponents} />
//             <Stack.Screen name='Profile' component={Profile} />
//             <Stack.Screen name='MovieDetailPage' component={MovieDetailPage} />
//             <Stack.Screen name='Play' component={Play} />
//             <Stack.Screen name='Loader' component={Loader} />
//             <Stack.Screen name='MyList' component={MyList} /> */}



//         </Stack.Navigator>

//     )
// }

// export default Navigator





//
import { View, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/Home';
import Search from '../Screens/SearchScreen/Search';
import ComingSoon from '../Screens/ComingSoonScreen/ComingSoon';
import Downloads from '../Screens/DownloadsScreen/Downloads';
import More from '../Screens/MoreScreen/More';
import Main from '../Screens/MainScreen/Main';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/ProfileScreen/Profile';
import RenderMoviesComponents from '../Screens/HomeScreen/RenderMoviesComponents';
import MovieDetailPage from '../Screens/DownloadsScreen/MovieDetailPage';
import Play from '../Screens/PlayScreen/Play';
import Loader from '../Loader/Loader';
import MyList from '../Screens/HomeScreen/MyList';
import LogIn from '../LogInSignIn/LogIn';
import SignUp from '../LogInSignIn/SignUp';
import CreateUserWithEmailAndPassword from '../LogInSignIn/Auth/Firebase/CreateUserWithEmailAndPassword';
import auth from '@react-native-firebase/auth';
import { FirebaseContext } from '../LogInSignIn/Auth/Firebase/FirebaseContext';
import AppStack from './Stacks/AppStack';
import AuthStack from './Stacks/AuthStack';




const Navigator = () => {
    const Stack = createNativeStackNavigator();

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    // const [isUser, setIsUser] = useState();
    const {user, setUser}= useContext(FirebaseContext);

    // const { user, setUser } = useContext(FirebaseContext)

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;


    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>

    )
}

export default Navigator