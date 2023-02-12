import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <View style={{ backgroundColor: 'red',height:"55%",width:"100%" }}>
        <Video  // Can be a URL or a local file.
          source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
          controls={true}
          fullscreen={true}
          style={styles.backgroundVideo}
        />
        {/* <Text>ikj</Text> */}
      </View>
    </View>
  )
}

export default Profile
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:"100%",
    height:"100%"
  },
});
