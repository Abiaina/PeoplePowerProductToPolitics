import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// import { StyleSheet, Text, View } from 'react-native';

export default class ProductDetails extends React.Component {

//There should be a axios get request for the barcode api
//
showScanner () {
  return (
    <BarcodeScanner/>
  )
}
  render() {
    return (
      <View>
        {this.showScanner}
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
