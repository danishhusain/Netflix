import { View, Text, Button, StatusBar, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from 'react-native-paper'
import Main from '../MainScreen/Main'
import { Colors } from '../../CustomComponents/CustomColor'
import axios from 'axios'
import { MoviesContext } from '../../ContextAPI/moviesContext'

const Home = () => {
    const navigation = useNavigation()
    const { movies, setMovies } = useContext(MoviesContext)

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
                <View style={{ flexDirection: 'row', backgroundColor: 'green', justifyContent: 'space-between' }}>
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
                        <Text style={{ width: 120, backgroundColor: 'grey', }} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: 'green', justifyContent: 'space-between' }}>
                    <IconButton icon={'information'} iconColor={Colors.WHITE} />
                    <IconButton icon={'dots-vertical'} iconColor={Colors.WHITE} />

                </View>
            </View>
        )
    }

    return (
        <>
            <StatusBar backgroundColor={Colors.BG} />
            <View style={{ flex: 1, }}>
                <ImageBackground source={require('../../Assets/Images/main.jpg')}>
                    {/* 1 */}
                    <View style={{ flexDirection: 'row', }}>

                        <IconButton icon={'netflix'} iconColor={Colors.RED} />
                        {/* 1 */}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 30, width: 30, right: 5, borderRadius: 5 }}>
                                <Image style={{ height: 30, width: 30, right: 5, borderRadius: 5 }} source={require('../../Assets/Images/account.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    {/* <ScrollView> */}

                    {/* 1 */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }} onPress={() => { }}>Tv Shows</Text>
                        <Text style={{ fontSize: 20 }} onPress={() => { }}>Movies</Text>
                        <Text style={{ fontSize: 20 }} onPress={() => { }}>My List</Text>
                    </View>

                    {/* 3 */}
                    <View style={{}}>
                        {/* 2.1 */}
                        <View style={{}}>
                            <Text style={{ alignSelf: 'center' }}>Stranger Things</Text>
                        </View>
                        {/* 2.2 */}
                        <View style={{ marginVertical: 20 }}>
                            <Text style={{ alignSelf: 'center' }}>TvShows. TextTo.TvSHows.US</Text>
                        </View>
                        {/* 2.3 */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            {/* 2.3.1 */}
                            <View style={{}}>
                                <IconButton icon={'check'} />
                                <Text style={{ alignSelf: 'center', bottom: 15 }}>My List</Text>
                            </View>
                            {/* 2.3.2 */}
                            <View style={{}}>
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
                    {/* </ScrollView> */}

                </ImageBackground>
                {/* <ScrollView> */}

                {/* 4 */}
                <View style={{ backgroundColor: 'red' }}>
                    <Text>Preview</Text>
                </View>
                {/* 5 */}
                <View style={{ backgroundColor: 'black' }}>
                    <FlatList
                        data={movies}
                        renderItem={renderMovies}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                {/* 6 */}
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
                {/* 8 */}
                <View style={{ backgroundColor: 'red' }}>
                    <Text>My List</Text>

                </View>
                {/* 9 */}
                <View style={{ backgroundColor: 'black' }}>
                    <FlatList
                        data={movies}
                        renderItem={MyList}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>


                {/* </ScrollView> */}

            </View>

        </>
    )
}

export default Home