import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import Politicians from './components/Politicians'
import Barcode from './components/Barcode'



export default class App extends React.Component {

useCamera() {
  return('You pressed a button!');
}


  render() {
    return (
      <View style={styles.container}>
        <Barcode/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
