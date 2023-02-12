import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';
import Search from '../Screens/SearchScreen/Search';
import ComingSoon from '../Screens/ComingSoonScreen/ComingSoon';
import Downloads from '../Screens/DownloadsScreen/Downloads';
import More from '../Screens/MoreScreen/More';
import Home from '../Screens/HomeScreen/Home';
import Main from '../Screens/MainScreen/Main';
import MovieDetailPage from '../Screens/DownloadsScreen/MovieDetailPage';


const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: () => (<IconButton icon={"home"} size={25} />)
      }} />
      <Tab.Screen name='Search' component={Search} options={{
        tabBarIcon: () => (<IconButton icon={"magnify"} size={25} />)
      }} />
      <Tab.Screen name='ComingSoon' component={ComingSoon} options={{
        tabBarIcon: () => (<IconButton icon={"play-box-multiple"} size={25} />)
      }} />
      <Tab.Screen name='Downloads' component={Downloads} options={{
        tabBarIcon: () => (<IconButton icon={"download"} size={25} />)
      }} />
      <Tab.Screen name='More' component={Main} options={{
        tabBarIcon: () => (<IconButton icon={"format-list-bulleted"} size={25} />)
      }} />
     

    </Tab.Navigator>
  )
}

export default TabNavigator