import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

// import { StyleSheet, Text, View } from 'react-native';

export default class ProductDetails extends React.Component {

//There should be a axios get request for the barcode api
//
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.props.barcode}</Text>
        </View>
        <Image
         style={styles.picture}
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  pic: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
