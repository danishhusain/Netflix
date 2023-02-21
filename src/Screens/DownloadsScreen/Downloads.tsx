import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../CustomComponents/CustomColor'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
// import MovieDetailPage from './MovieDetailPage'
import Home from '../HomeScreen/Home'
import Navigator from '../../Navigator/Navigator'
import App from '../../../App'
import MovieDetailPage from './MovieDetailPage'

const Downloads = () => {
  const navigation = useNavigation()


  return (
    <View style={{ flex: 1, backgroundColor: Colors.BLACK, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ borderRadius: 100, backgroundColor: Colors.GRAY, marginBottom: 10 }}>
        <IconButton icon={'download'} size={100} />
      </View>
      <Text style={{color:Colors.WHITE}}>Movies and TV shows that you {'\n'}         download appear here</Text>
      <View style={{ top: 200 }}>
        <Button mode='contained' style={{ backgroundColor: 'white', }} textColor={Colors.BLACK} onPress={() => {navigation.navigate(MovieDetailPage)}}>Find Somthing to Download</Button>
        {/* </> */}
      </View>
    </View>
  )
}

export default Downloads