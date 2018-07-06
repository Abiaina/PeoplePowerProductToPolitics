import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import BarcodeScanner from './BarcodeScanner'
import ProductDetails from './ProductDetails'
import { BarCodeScanner, Permissions } from 'expo';


export default class ScanContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcodeData: null
    };
    this.handleOnBarCodeRead = this.handleOnBarCodeRead.bind(this);
  }

  handleOnBarCodeRead(data) {
    this.setState({
      barcodeData: data.data
    });
  }

  showScanScanner() {
    return(
      <BarcodeScanner
        onBarCodeRead={this.handleOnBarCodeRead}
       />
    )
  }

  showProduct() {
    return (
      <ProductDetails
        barcode={this.state.barcodeData}
      />
    )
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        {(this.state.barcodeData) ? this.showProduct() :
        this.showScanScanner()}
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
