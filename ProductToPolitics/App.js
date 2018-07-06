import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import BarcodeScanner from './components/BarcodeScanner'
import { BarCodeScanner, Permissions } from 'expo';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      barcodeData: null
    };
    this.handleOnBarCodeRead = this.handleOnBarCodeRead.bind(this);
  }

  handleOnBarCodeRead(data) {
    this.setState({
      barcodeData: data
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      {(this.state.barcodeData) ? <Text>'barcode found'</Text> :
       <BarcodeScanner
        onBarCodeRead={this.handleOnBarCodeRead}
       />}
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
