import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import BarcodeScanner from './components/BarcodeScanner'
import { BarCodeScanner, Permissions } from 'expo';


export default class App extends React.Component {

useCamera() {
  return('You pressed a button!');
}


  render() {
    return (
      <BarcodeScanner/>
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
