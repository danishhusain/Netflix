import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import TabNavigator from './src/Navigator/TabNavigator';
import Navigator from './src/Navigator/Navigator';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import MoviesContextProvider from './src/ContextAPI/moviesContext';


const App = () => {
  return (
    <MoviesContextProvider>
      {/* <Provider store={store}> */}
        <PaperProvider>
          <NavigationContainer>
            <TabNavigator />
            {/* <Navigator/> */}
          </NavigationContainer>
        </PaperProvider>
      {/* </Provider> */}
    </MoviesContextProvider>
  )
}

export default App