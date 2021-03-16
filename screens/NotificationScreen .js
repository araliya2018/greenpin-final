import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from 'firebase';
import db from '../config'
import * as SMS from 'expo-sms';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

const { width } = Dimensions.get('screen');

import { Header, Icon, Badge } from 'react-native-elements';


export default class NotificationScreen extends React.Component {

  constructor()
  {
    super()
    this.state={
      userId:firebase.auth().currentUser.email,
      number:0
    }
  }

  componentDidMount()
  {
    db.collection("users").where("username","==", this.state.userId).get()
    .then((snapshot)=>{
   snapshot.forEach((doc) => {
    this.setState({
    "number" : doc.data().mobile_number
  })
});
})
console.log(this.state.number);
  }
  oncallSms=async()=>
  {
    const { result } = await SMS.sendSMSAsync(
      [this.state.number],
      'ypur plant xyz is lacking manure,sample text please ignore-green pin',
      {
       
      }
    );
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#1B2E0F',
          marginTop: 50,
        }}>
            

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('Community');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Community
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('PlantATree');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Plant A Tree
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('Foundation');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Foundation
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.oncallSms()
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
             Get SMS update
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginTop: 40,
              marginLeft: 10,
              borderWidth: 2,
              borderColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              width: 400,
              height: 40,
              borderRadius: 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen');
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
  },
  products: {
    width: width - 50 * 2,
    paddingVertical: 50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  shadow: {
    shadowColor: '#415136',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});