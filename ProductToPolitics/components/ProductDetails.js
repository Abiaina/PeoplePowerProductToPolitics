import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// import { StyleSheet, Text, View } from 'react-native';

export default class ProductDetails extends React.Component {


  render() {
    return (
      <View>
        <Image
         style={{width: 100, height: 100}}
         source={{uri: 'https://pics.drugstore.com/prodimg/476553/900.jpg'}}
         />
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
