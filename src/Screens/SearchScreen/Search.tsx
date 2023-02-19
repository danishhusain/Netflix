import React, { useContext, useEffect, useState } from 'react'
import { Card, Searchbar } from 'react-native-paper';
import { Colors } from '../../CustomComponents/CustomColor'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { MoviesContext } from '../../ContextAPI/moviesContext';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import Play from '../PlayScreen/Play';


const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  // const onChangeSearch = query => setSearchQuery(query);
  const { movies, setMovies } = useContext(MoviesContext)
  const [filteredData, setFilteredData] = useState(movies);
  const navigation = useNavigation()


  const onChangeSearch = (text) => {
    setSearchQuery(text);
    const newData = movies.filter((item) => {
      const itemData = item.title.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  }

  // console.log("moviesContext",filteredData)
  const renderSearches = ({ item }) => {
    // const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
    const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
    // console.log("render",movies)
    return (
      <>
        <Card style={{ flexDirection: 'row', marginVertical: 2 }} >
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate(Play)}>
            <View style={{ flexDirection: 'row', marginVertical: 2 }}>
              <View style={{ flexDirection: 'row' }}>
                {/* <Text style={{ fontSize: 20, }}>Poupular Searches</Text> */}
                {/* <Image style={{ height: 80, width: 120, }} source={{ uri: posterImg }} /> */}
                <Image style={{ height: 80, width: 120, }} source={{ uri: backdropImg }} />
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
    <View style={{ flex: 1 }}>
      <View>
        <Searchbar
          placeholder="Search for show movie, genre,etc"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ backgroundColor: Colors.GRAY, margin: 3, fontSize: 16 }}

        />
      </View>
      <View>
        <Text style={{ fontSize: 20, left: 5 }}>Poupular Searches</Text>
      </View>
      <View style={{ justifyContent: 'space-between', margin: 5 }}>
        <FlatList
          data={filteredData}
          renderItem={renderSearches}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Search;
