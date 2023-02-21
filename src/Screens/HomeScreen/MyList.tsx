import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { MoviesContext } from '../../ContextAPI/moviesContext'
import { Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Play from '../PlayScreen/Play'
import { Colors } from '../../CustomComponents/CustomColor'


const MyList = () => {
    const navigation=useNavigation()
    const { movies, setMovies } = useContext(MoviesContext)


    const renderSearches = ({ item }) => {
        // const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        // console.log("render",movies)
        return (
          <>
            <Card style={{ flexDirection: 'row', marginVertical: 2, }} >
              <TouchableOpacity style={{ flexDirection: 'row', paddingRight: 250 }} onPress={() => navigation.navigate(Play)}>
                <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                  <View style={{ flexDirection: 'row' }}>
                    {/* <Text style={{ fontSize: 20, }}>Poupular Searches</Text> */}
                    {/* <Image style={{ height: 80, width: 120, }} source={{ uri: posterImg }} /> */}
                    <Image style={{ height: 80, width: 120, borderBottomLeftRadius:8,borderTopLeftRadius:8}} source={{ uri: backdropImg }} />
                  </View>
    
                  <View style={{ left: 5, justifyContent: 'center' }}>
                    <Text style={{}} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
    
          </>
        )
      }
  return (
    <View style={{flex:1,backgroundColor:Colors.BLACK}}>
       <View>
          <Text style={{ fontSize: 20, left: 5 ,color:Colors.WHITE}}>Your List</Text>
        </View>

      <View style={{ justifyContent: 'space-between', margin: 5 ,flex:1}}>
        <FlatList
          data={movies}
          renderItem={renderSearches}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default MyList