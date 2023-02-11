import { View, Text, Button, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'
import Main from '../MainScreen/Main'
import { Colors } from '../../CustomComponents/CustomColor'
import axios from 'axios'
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

const Home = () => {
    const navigation = useNavigation()
    const [movies, setMovies] = useState()
    // console.log(typeof movies);
    useEffect(() => {
        fetchMovies()
    }, [])
    const fetchMovies = async () => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=03e185082f315843666a90034a86b9ff', {
        })
            .then(function (response) {
                // console.log(response.data.results[1].overview);
                setMovies(response.data.results)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    // console.log(movies)
    // renderMovies
    const renderMovies = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ borderRadius: 100, marginHorizontal: 4, borderColor: 'blue' }}>
                <TouchableOpacity style={{ borderRadius: 100, marginHorizontal: 4, borderColor: 'blue' }}>
                    <Image style={{ height: 120, width: 120, borderRadius: 100 }} source={{ uri: posterImg }} />
                    {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                    <Text style={{ width: 120, backgroundColor: 'grey', }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // continueWatching
    const continueWatching = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                <View>
                {/* <IconButton icon={'information'} iconColor={Colors.WHITE} /> */}
                    <TouchableOpacity style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                        <Image style={{ height: 140, width: 120, }} source={{ uri: posterImg }} />
                        {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                        <Text style={{ width: 120, backgroundColor: 'grey', }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <IconButton icon={'information'} iconColor={Colors.WHITE} />
                    <IconButton icon={'dots-vertical'} iconColor={Colors.WHITE} />

                </View>
            </View>
        )
    }
    return (
        <>
            <StatusBar backgroundColor={Colors.BG} />
            <View style={{ flex: 1, backgroundColor: Colors.BG }}>
                {/* 1 */}
                <View style={{ flexDirection: 'row', }}>

                    <IconButton icon={'netflix'} iconColor={Colors.RED} />
                    {/* 1.1 */}
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text>Tv Shows</Text>
                        <Text>Movies</Text>
                        <Text>My List</Text>
                    </View>
                </View>
                {/* 2 */}
                <View style={{ backgroundColor: 'green', }}>
                    {/* 2.1 */}
                    <View style={{ backgroundColor: 'green' }}>
                        <Text style={{ alignSelf: 'center' }}>Stranger Things</Text>
                    </View>
                    {/* 2.2 */}
                    <View style={{ backgroundColor: 'green', marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>TvShows. TextTo.TvSHows.US</Text>
                    </View>
                    {/* 2.3 */}
                    <View style={{ backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-around' }}>
                        {/* 2.3.1 */}
                        <View style={{}}>
                            <IconButton icon={'check'} />
                            <Text style={{ alignSelf: 'center', bottom: 15 }}>My List</Text>
                        </View>
                        {/* 2.3.2 */}
                        <View style={{ backgroundColor: 'green', }}>
                            <TouchableOpacity style={{ backgroundColor: Colors.WHITE, flexDirection: 'row', borderRadius: 5 }}>
                                <IconButton icon={'play'} />
                                <Text style={{ alignSelf: 'center', right: 10 }}>Play</Text>
                            </TouchableOpacity>
                        </View>
                        {/* 2.3.3 */}
                        <View>
                            <IconButton icon={'information'} />
                            <Text style={{ alignSelf: 'center', bottom: 15 }}>Info</Text>
                        </View>
                    </View>
                </View>
                {/* 3 */}
                <View style={{ backgroundColor: 'red' }}>
                    <Text>Preview</Text>
                </View>
                {/* 4 */}
                <View style={{ backgroundColor: 'black' }}>
                    <FlatList
                        data={movies}
                        renderItem={renderMovies}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                {/* 5 */}
                <View style={{ backgroundColor: 'red' }}>
                    <Text>Continue whatching</Text>

                </View>
                {/* 6 */}
                <View style={{ backgroundColor: 'black' }}>
                    <FlatList
                        data={movies}
                        renderItem={continueWatching}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>



            </View>
        </>
    )
}

export default Home