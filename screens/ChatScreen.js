import React, { Component } from 'react';
import {  StyleSheet, Text, View ,TouchableOpacity,Alert} from 'react-native';

import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import firebase from 'firebase';
import db from '../config'
export default class ChatScreen extends React.Component{
  constructor()
  {
    super()
  this.state={
    userId:firebase.auth().currentUser.email,
    pdocId:"",
    mdocId:"",


  }
  }
  componentDidMount(){
    db.collection("plant_water_tracker").where("user_id","==", this.state.userId).get()
    .then((snapshot)=>{
   snapshot.forEach((doc) => {
    this.setState({
    "pdocId" : doc.id
  })
});
})

db.collection("plant_manure_tracker").where("user_id","==", this.state.userId).get()
    .then((snapshot)=>{
   snapshot.forEach((doc) => {
    this.setState({
    "mdocId" : doc.id
  })
});
})
  }


  render(){
  return (
    <View
      style={styles.container}
    >
      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Enter your activity!</Text></View>
        <CustomButton
          style={styles.button}
          title="Add your watering activity"
          onPress={ () => {
           //this.props.navigation.navigate('AddWater');

          
   //  console.log(this.state.docId)
          
       
         db.collection("plant_water_tracker").doc(this.state.pdocId).update({
         water_quantity: firebase.firestore.FieldValue.increment(1)
         })
         Alert.alert("Added water  successfully")
          }}
        
        />
       
      </Card>
      <Card style={styles.homeCard}>
        <View><Text style={styles.text}>Track and update your plan here.</Text></View>
        <CustomButton
          style={styles.button}
          title="Add Manuering activity"
          onPress={() => {
        //   this.props.navigation.navigate('AddManure');

           db.collection("plant_manure_tracker").doc(this.state.mdocId).update({
            'manure_quantity': firebase.firestore.FieldValue.increment(1)
          })
          Alert.alert("Added manure successfully")
          }}
        />
       
      </Card>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"#092f1c"
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    marginTop:80,
    marginLeft:100
  },
});