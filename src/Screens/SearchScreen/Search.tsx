import React, { useContext, useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { Colors } from '../../CustomComponents/CustomColor'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { MoviesContext } from '../../ContextAPI/moviesContext';


const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const { movies, setMovies } = useContext(MoviesContext)

  const renderSearches = ({ item }) => {
    // const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
    const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`

    return (
      <>
        <TouchableOpacity style={{ flexDirection: 'row' }}>

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

      </>
    )
  }
  return (
    <View>
      <View>
        <Searchbar
          placeholder="Search for show movie, genre, etc"
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
          data={movies}
          renderItem={renderSearches}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Search;
