import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '../../CustomComponents/CustomColor'
import { Button, Card, IconButton } from 'react-native-paper'
import Clipboard from '@react-native-clipboard/clipboard';
import auth, { firebase } from '@react-native-firebase/auth';
import { current } from '@reduxjs/toolkit';
import { FirebaseContext } from '../../LogInSignIn/Auth/Firebase/FirebaseContext';
import { GoogleSignin, } from '@react-native-google-signin/google-signin';



const More = () => {
  const [copiedText, setCopiedText] = useState('');
  const { user, setUser } = useContext(FirebaseContext);

  // clipBoard
  const Copyied = () => {
    const textToCopy = 'https://www.netflix.com/in/'
    Clipboard.setString(textToCopy);
    ToastAndroid.showWithGravityAndOffset(
      'Copied',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      30,
      30,
    );
  }

  const signOut = async () => {
    auth().signOut()
      .then(() => console.log('User signed out!'));
    auth().onAuthStateChanged(user => {
      if (!user) {
        console.log("Redirecting to login page")
      }
    });
  };

  const isSignedIn = async () => {
    const userInfo = await GoogleSignin.isSignedIn();
    console.log(userInfo)
  }







  return (
    <View style={{ flex: 1, backgroundColor: Colors.BG }}>
      {/* 1 */}
      <View style={{ borderColor: Colors.WHITE, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30, marginTop: 10, }}>
        {/* 1.1 */}
        <View>
          <Image style={{ height: 60, width: 60, borderRadius: 3 }} source={require('../../Assets/Images/account.png')} />
          <Text style={{ color: Colors.WHITE }}>Nino</Text>
        </View>
        {/* 1.1 */}
        <View>
          <Image style={{ height: 60, width: 60, borderRadius: 3 }} source={require('../../Assets/Images/account2.png')} />
          <Text style={{ color: Colors.WHITE }}>Nino</Text>
        </View>
        {/* 1.1 */}
        <View>
          <Image style={{ height: 60, width: 60, borderRadius: 3 }} source={require('../../Assets/Images/account3.png')} />
          <Text style={{ color: Colors.WHITE }}>Nino</Text>
        </View>
        {/* 1.1 */}
        <View>
          <Image style={{ height: 60, width: 60, borderRadius: 3 }} source={require('../../Assets/Images/account4.png')} />
          <Text style={{ color: Colors.WHITE }}>Nino</Text>
        </View>
        {/* 1.1 */}
        <View>
          <Image style={{ height: 60, width: 60, borderRadius: 3 }} source={require('../../Assets/Images/account5.png')} />
          <Text style={{ color: Colors.WHITE }}>Nino</Text>
        </View>



      </View>
      {/* 2 */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.GRAY, marginHorizontal: 5, marginBottom: 10, marginTop: 20 }}>
        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.GRAY, marginHorizontal: 5 }}>
          <IconButton icon={'pencil'} iconColor={Colors.WHITE} />
          <Text style={{ color: Colors.WHITE, }}>Manage Profiles</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: '600', color: Colors.WHITE, left: 5 }}>Tell friends about Netflix.</Text>
        <Card style={{ marginTop: 20, marginHorizontal: 5 }}>
          <Card.Content>
            <Text>Share this link so your friend can join the conversation around all your favrioute Tv shows and movies.</Text>
          </Card.Content>
        </Card>
      </View>
      {/* 3*/}
      <View style={{ marginHorizontal: 5, marginTop: 20 }}>
        <Card style={{ backgroundColor: Colors.BLACK, elevation: 10 }}>
          <Card.Content style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: Colors.WHITE, }} selectable>https://www.netflix.com/in/</Text>
            <Button style={{ backgroundColor: Colors.WHITE }} onPress={() => Copyied()}>Copy Link</Button>

          </Card.Content>
        </Card>
      </View>
      {/* 4 */}
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around', backgroundColor: Colors.BLACK, padding: 15, marginHorizontal: 5, }}>
        <TouchableOpacity>
          <Image source={require('../../Assets/Images/whatsapp.png')} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../Assets/Images/facebook.webp')} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../Assets/Images/gmail.png')} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../Assets/Images/instagram.png')} style={{ height: 22, width: 22 }} />
        </TouchableOpacity>



      </View>
      {/* 5 */}
      <View style={{ top: 20 }}>

        <TouchableOpacity style={{ margin: 5, backgroundColor: Colors.GRAY, }}>
          <Text style={{ color: Colors.WHITE, padding: 10 }}>App Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ margin: 5, backgroundColor: Colors.GRAY, }}>
          <Text style={{ color: Colors.WHITE, padding: 10 }}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ margin: 5, backgroundColor: Colors.GRAY, }}>
          <Text style={{ color: Colors.WHITE, padding: 10 }}>Help</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ margin: 5, backgroundColor: Colors.GRAY, }} onPress={() => { signOut() }}>
          <Text style={{ color: Colors.WHITE, padding: 10 }}>Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 5, backgroundColor: Colors.GRAY, }} onPress={() => { isSignedIn() }}>
          <Text style={{ color: Colors.WHITE, padding: 10 }}>getCurrentUser</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default More

const styles = StyleSheet.create({})