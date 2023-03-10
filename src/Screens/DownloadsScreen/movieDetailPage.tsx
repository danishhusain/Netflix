import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { MoviesContext } from '../../ContextAPI/moviesContext'
import { Button, IconButton } from 'react-native-paper'
import { Colors } from '../../CustomComponents/CustomColor'
import Play from '../PlayScreen/Play'
import { useNavigation } from '@react-navigation/native'

const MovieDetailPage = () => {
    const navigation = useNavigation()
    const { movies, setMovies, info, setInfo, RandomNo } = useContext(MoviesContext)
    const { width, height } = Dimensions.get('window');

    // console.log(info)

    const renderMoreLikeThis = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                <View>
                    <TouchableOpacity style={{ marginHorizontal: 4, borderColor: 'blue' }} onPress={() => navigation.navigate(Play)}>
                        <Image style={{ height: 140, width: 120, }} source={{ uri: posterImg }} />
                        {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                        <Text style={{ width: 120, fontSize: 18,color:Colors.WHITE }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    return (
        <ScrollView>

            <View style={{backgroundColor:Colors.BLACK}}>
                {/* 1 */}
                <View style={{  }}>
                    {info && <ImageBackground source={{ uri: `http://image.tmdb.org/t/p/w185/${info.poster_path}` }} style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, height: height/3, width: width }} />}
                    
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <View>
                        <Text style={{color:Colors.WHITE}}>Popularity</Text>
                        <Text style={{color:Colors.WHITE}}>{info.popularity}</Text>
                    </View>
                    <View>
                        <Text style={{color:Colors.WHITE}}>Language</Text>
                        <Text style={{color:Colors.WHITE}}>{info.original_language}</Text>
                    </View>
                    <View>
                        <Text style={{color:Colors.WHITE}}>Release_Date</Text>
                        <Text style={{color:Colors.WHITE}}>{info.release_date}</Text>
                    </View>

                </View>

                {/* 3 */}
                <View >
                    {/* 3.1 */}
                    <View style={{ backgroundColor: Colors.backgroundColor, margin: 5 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate(Play)}>
                            <IconButton icon={'play'} iconColor={Colors.WHITE}/>
                            <Text style={{ alignSelf: 'center',color:Colors.WHITE }}>Play</Text>
                        </TouchableOpacity>
                    </View>
                    {/* 3.2 */}
                    <View style={{ backgroundColor: Colors.GRAY, margin: 5 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton icon={'download'}iconColor={Colors.WHITE} />
                            <Text style={{ alignSelf: 'center',color:Colors.WHITE }}>Download</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* 4 */}
                <View style={{ margin: 5, height: height/7, width: width,}}>
                {/* <View style={{ margin: 5, height: 120, width: '100%' }}> */}
                    <Text style={{color:Colors.WHITE}}>{info.overview}</Text>
                </View>
                {/* 5 */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',backgroundColor:'grey' }}>
                    {/* 5.1 */}
                    <View >
                        <IconButton icon={'check'} iconColor={Colors.WHITE}/>
                        <Text style={{ alignSelf: 'center',  bottom: 5,color:Colors.WHITE }}>My List</Text>
                    </View>
                    {/* 5.2 */}
                    <View>
                        <IconButton icon={'thumb-up-outline'} iconColor={Colors.WHITE}/>
                        <Text style={{ alignSelf: 'center', bottom: 5 ,color:Colors.WHITE}}>Rate</Text>
                    </View>
                    {/* 5.2 */}
                    <View>
                        <IconButton icon={'share-variant'} iconColor={Colors.WHITE}/>
                        <Text style={{ alignSelf: 'center', bottom: 5 ,color:Colors.WHITE}}>Share</Text>
                    </View>
                </View>
                <View style={{ paddingLeft: 5, }}>
                    <Text style={{ fontSize: 18,color:Colors.WHITE }}>More Like This</Text>
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