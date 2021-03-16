import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddManure extends React.Component {
render(){
  return (
    <View style={{ ...props.style, ...styles.container }}>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 26,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  },

 
});