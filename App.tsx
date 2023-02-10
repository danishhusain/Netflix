import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import TabNavigator from './src/Navigator/TabNavigator';
import Navigator from './src/Navigator/Navigator';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
        {/* <Navigator/> */}
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App