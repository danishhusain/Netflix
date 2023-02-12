import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { MoviesContext } from '../../ContextAPI/moviesContext'
import { Button, IconButton } from 'react-native-paper'
import { Colors } from '../../CustomComponents/CustomColor'

const MovieDetailPage = () => {
    const { movies, setMovies } = useContext(MoviesContext)
    const { width, height } = Dimensions.get('window');
    const posterImg = `http://image.tmdb.org/t/p/w185/${movies[1].poster_path}`


    const renderMoreLikeThis = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                <View>
                    <TouchableOpacity style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                        <Image style={{ height: 140, width: 120, }} source={{ uri: posterImg }} />
                        {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                        <Text style={{ width: 120, fontSize: 18 }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    return (
        <ScrollView>

        <View>
                {/* 1 */}
                <View style={{ width: '100%',  }}>
                    {/* <View style={{width: '100%',height:'30%',}}> */}
                    <Image source={require('../../Assets/Images/main2.jpg')} style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5,height:220,width:"100%" }} />
                    {/* <Image source={{uri:posterImg}} style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5,height:220,width:"100%" }} /> */}
                    {/* </View> */}
                    {/* 2 */}
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <View>
                        <Text>Popularity</Text>
                        <Text>{movies[1].popularity}</Text>
                    </View>
                    <View>
                        <Text>Language</Text>
                        <Text>{movies[1].original_language}</Text>
                    </View>
                    <View>
                        <Text>Release_Date</Text>
                        <Text>{movies[1].release_date}</Text>
                    </View>

                </View>

                {/* 3 */}
                <View >
                    {/* 3.1 */}
                    <View style={{ backgroundColor: Colors.BLACK, margin: 5 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton icon={'play'} />
                            <Text style={{ alignSelf: 'center' }}>Play</Text>
                        </TouchableOpacity>
                    </View>
                    {/* 3.2 */}
                    <View style={{ backgroundColor: Colors.GRAY, margin: 5 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton icon={'download'} />
                            <Text style={{ alignSelf: 'center' }}>Download</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* 4 */}
                <View style={{ margin: 5, height: 120, width: '100%' }}>
                    <Text>{movies[8].overview}</Text>
                </View>
                {/* 5 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    {/* 5.1 */}
                    <View >
                        <IconButton icon={'check'} />
                        <Text style={{ alignSelf: 'center', bottom: 5 }}>My List</Text>
                    </View>
                    {/* 5.2 */}
                    <View>
                        <IconButton icon={'thumb-up-outline'} />
                        <Text style={{ alignSelf: 'center', bottom: 5 }}>Rate</Text>
                    </View>
                    {/* 5.2 */}
                    <View>
                        <IconButton icon={'share-variant'} />
                        <Text style={{ alignSelf: 'center', bottom: 5 }}>Share</Text>
                    </View>
                </View>
                <View style={{ paddingLeft: 5, }}>
                    <Text style={{ fontSize: 18 }}>More Like This</Text>
                </View>
                {/* 6 */}
                <View style={{}}>

                    <FlatList
                        data={movies}
                        renderItem={renderMoreLikeThis}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
        </View >
        </ScrollView >

    )
}

export default MovieDetailPage