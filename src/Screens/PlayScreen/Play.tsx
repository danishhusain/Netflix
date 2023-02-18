import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback, StatusBar } from 'react-native';
import VideoPlayer from 'react-native-video-player'


const Play = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const videoPlayerRef = useRef(null);
    const videoPlayer = React.useRef();
    const { height, width } = Dimensions.get('screen')

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const videoStyle = isFullScreen ? styles.fullScreenVideo : styles.normalVideo;

    return (
        // <TouchableWithoutFeedback onPress={toggleFullScreen}>
        <View style={videoStyle}>
            <StatusBar hidden />
            <VideoPlayer
                video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                autoplay={true}
                defaultMuted={true}
                videoWidth={1600}
                videoHeight={900}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                // ref={ref => (videoPlayer.current = ref)}
                showDuration={true}
                disableFullscreen={true}
                fullScreenOnLongPress={true}
                controlIcon={true}

            />
        </View>
        //  {/* </TouchableWithoutFeedback> */}

    )
}

export default Play
const styles = StyleSheet.create({
    normalVideo: {
        width: '100%',
        aspectRatio: 16 / 9,
        // height: '100%',

    },
    fullScreenVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height,
    },
    videoPlayer: {
        // flex: 1,
        height: '100%',
        width: '100%',
    },
});



// import { View, Text } from 'react-native'
// import React from 'react'

// const Play = () => {
//   return (
//     <View>
//       <Text>Play</Text>
//     </View>
//   )
// }

// export default Play