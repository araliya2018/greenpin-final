import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import * as SMS from 'expo-sms';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import firebase from 'firebase';
import db from '../config'
//import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class ChatScreen extends React.Component{

  constructor()
  {
    super()
  this.state={
    userId:firebase.auth().currentUser.email,
    water:0,
    maure:0,


  }
  }

  componentDidMount(){
    db.collection("plant_water_tracker").where("user_id","==", this.state.userId).get()
    .then((snapshot)=>{
   snapshot.forEach((doc) => {
    this.setState({
    "water" : doc.data().water_quantity
  })
});
})
db.collection("plant_manure_tracker").where("user_id","==", this.state.userId).get()
    .then((snapshot)=>{
   snapshot.forEach((doc) => {
    this.setState({
    "manure" :doc.data().manure_quantity
  })
});
})

console.log(this.state.water)

  }


  oncallSms=async()=>
    {
      const { result } = await SMS.sendSMSAsync(
        ['8921290012', '9623448771'],
        'ypur plant xyz is lacking manure,sample text please ignore-green pin',
        {
         
        }
      );
    }



  render(){
  return (
    <View style={styles.horizontal}>
    <Text style={{marginLeft:80}}>Nurture</Text>
    <View style={{marginTop:10}}>
    <AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={this.state.water}
    backgroundColor={'green'}
/>
</View>
<View style={{marginTop:40}}>
<Text style={{marginLeft:80}}>Manure</Text>
<AnimatedProgressWheel 
    size={200} 
    width={20} 
    color={'yellow'}
    progress={this.state.manure}
    backgroundColor={'green'}
/>
</View>




</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 2,
    marginTop:70,
    marginLeft:100
  },
});