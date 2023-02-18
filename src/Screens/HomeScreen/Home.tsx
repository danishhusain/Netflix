import { View, Text, Button, StatusBar, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'
import Main from '../MainScreen/Main'
import { Colors } from '../../CustomComponents/CustomColor'
import axios from 'axios'
import { MoviesContext } from '../../ContextAPI/moviesContext'
import Profile from '../ProfileScreen/Profile'
import Downloads from '../DownloadsScreen/Downloads'
import MovieDetailPage from '../DownloadsScreen/MovieDetailPage'
import Info from './Info'
import Play from '../PlayScreen/Play'

const Home = () => {
    const navigation = useNavigation()
    const { movies, setMovies } = useContext(MoviesContext)

    // RenderMovies
    const RenderMovies = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ borderRadius: 100, marginHorizontal: 4, }}>
                <TouchableOpacity style={{ borderRadius: 100, marginHorizontal: 4, borderColor: 'blue' }}>
                    <Image style={{ height: 120, width: 120, borderRadius: 100 }} source={{ uri: posterImg }} />
                    {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                    <Text style={{ width: 120, color: Colors.WHITE, fontWeight: '400' }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // continueWatching
    const continueWatching = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ marginHorizontal: 4, }}>
                <View>
                    {/* <IconButton icon={'information'} iconColor={Colors.WHITE} /> */}
                    <TouchableOpacity style={{ marginHorizontal: 4, }}>
                        <Image style={{ height: 140, width: 120, }} source={{ uri: posterImg }} />
                        {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                        <Text style={{ width: 120, color: Colors.WHITE, fontWeight: '400' }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.backgroundColor, marginHorizontal: 4, }}>
                    <IconButton icon={'information'} iconColor={Colors.WHITE} />
                    <IconButton icon={'dots-vertical'} iconColor={Colors.WHITE} />

                </View>
            </View>
        )
    }
    // continueWatching
    const MyList = ({ item }) => {
        const posterImg = `http://image.tmdb.org/t/p/w185/${item.poster_path}`
        const backdropImg = `http://image.tmdb.org/t/p/w185/${item.backdrop_path}`
        return (
            <View style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                <View>
                    {/* <IconButton icon={'information'} iconColor={Colors.WHITE} /> */}
                    <TouchableOpacity style={{ marginHorizontal: 4, borderColor: 'blue' }}>
                        <Image style={{ height: 140, width: 120, }} source={{ uri: posterImg }} />
                        {/* <Image style={{height:100,width:100}} source={{uri:backdropImg}} /> */}
                        <Text style={{ width: 120, color: Colors.WHITE, fontWeight: '400', }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <>
            <StatusBar backgroundColor={Colors.BG} />
            <View style={{ flex: 1, }}>
                <ImageBackground source={require('../../Assets/Images/main2.jpg')} style={{}}>

                    {/* 1 */}
                    <View style={{ flexDirection: 'row', }}>
                        <View>
                            <IconButton icon={'netflix'} iconColor={Colors.RED} size={30} />
                        </View>

                        {/* 1 */}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 4, }}>
                            <TouchableOpacity style={{ height: 30, width: 30, right: 5, borderRadius: 5 }} onPress={() => navigation.navigate(Profile)}>
                                <Image style={{ height: 30, width: 30, right: 5, borderRadius: 5 }} source={require('../../Assets/Images/account.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* 1 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: Colors.WHITE, fontWeight: '400' }} onPress={() => { }}>Tv Shows</Text>
                        <Text style={{ fontSize: 20, color: Colors.WHITE, fontWeight: '400' }} onPress={() => { }}>Movies</Text>
                        <Text style={{ fontSize: 20, color: Colors.WHITE, fontWeight: '400' }} onPress={() => { }}>My List</Text>
                    </View>



                    {/* 3 */}
                    <View style={{ marginTop: '45%' }}>
                        {/* 2.1 */}
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center', fontSize: 26, fontWeight: '900', color: Colors.WHITE }}>End-Game</Text>
                        </View>
                        {/* 2.2 */}
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center', fontSize: 20, color: Colors.WHITE, fontWeight: '400' }}>TvShows. TextTo.TvSHows.US</Text>
                        </View>
                        {/* 2.3 */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: Colors.BLACK, }}>
                            {/* 2.3.1 */}
                            <View style={{}}>
                                <IconButton icon={'check'} size={25} iconColor={Colors.WHITE} />
                                <Text style={{ alignSelf: 'center', bottom: 15, color: Colors.WHITE, fontWeight: '400' }}>My List</Text>
                            </View>
                            {/* 2.3.2 */}
                            <View style={{ backgroundColor: Colors.backgroundColor, flexDirection: 'row', borderRadius: 5 }}>
                                <TouchableOpacity style={{ flexDirection: 'row', right: 5 }} onPress={()=>navigation.navigate(Play)}>
                                    <IconButton icon={'play'} size={25} iconColor={Colors.BLACK} />
                                    <Text style={{ alignSelf: 'center', right: 10, color: Colors.WHITE, fontWeight: '400' }}>Play</Text>
                                </TouchableOpacity>
                            </View>
                            {/* 2.3.3 */}
                            <View>
                                <IconButton icon={'information'} size={25} iconColor={Colors.WHITE} onPress={()=>navigation.navigate(Info)}/>
                                <Text style={{ alignSelf: 'center', bottom: 15, color: Colors.WHITE, fontWeight: '400' }}>Info</Text>
                            </View>
                        </View>
                    </View>



                </ImageBackground>
                {/* <ScrollView> */}
                {/* <View> */}
                <ScrollView>
                    {/* 4 */}
                    <View style={{ backgroundColor: Colors.BLACK }}>
                        <Text style={{ fontSize: 18, color: Colors.WHITE, fontWeight: '500' }}>Preview</Text>
                    </View>
                    {/* 5 */}
                    <View style={{ backgroundColor: Colors.BLACK }}>
                        <FlatList
                            data={movies}
                            renderItem={RenderMovies}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                    {/* 6 */}
                    <View style={{ backgroundColor: Colors.BLACK }}>
                        <Text style={{ fontSize: 18, color: Colors.WHITE, fontWeight: '500' }}>Continue whatching</Text>

                    </View>
                    {/* 6 */}
                    <View style={{ backgroundColor: Colors.BLACK }}>
                        <FlatList
                            data={movies}
                            renderItem={continueWatching}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                    {/* 8 */}
                    <View style={{ backgroundColor: Colors.BLACK }}>
                        <Text style={{ fontSize: 18, color: Colors.WHITE, fontWeight: '500' }}>My List</Text>

                    </View>
                    {/* 9 */}
                    <View style={{ backgroundColor: Colors.BLACK }}>
                        <FlatList
                            data={movies}
                            renderItem={MyList}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </ScrollView>
                {/* </View> */}
                {/* </ScrollView> */}

            </View>

        </>
    )
}

export default Home