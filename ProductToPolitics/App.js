import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import ScanContainer from './components/ScanContainer'
import ProductDetails from './components/ProductDetails'
import { BarCodeScanner, Permissions } from 'expo';



export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        scanBarcode: false,
        barcodeData: null,
      };
      this.handleOnBarcodeScan = this.handleOnBarcodeScan.bind(this);
    }

  toggleState = () => {
    this.setState({
      scanBarcode: !this.state.scanBarcode,
      barcodeData: null,
    });
  }

  scanButton () {
    return(
      <Button onPress={this.toggleState}
        title="Scan Barcode"
        color="#841500"
        accessibilityLabel="Scan barcode"
        />
    )
  }

  showProduct() {
    return (
      <View>
      <ProductDetails
        barcode={this.state.barcodeData}
      />
      {this.scanButton()}
      </View>
    )
  }

  showScanContainer() {
    return (
      <ScanContainer
        onBarcodeScan={this.handleOnBarcodeScan}
      />
    )
  }

  handleOnBarcodeScan(data) {
    this.setState({
      barcodeData: data,
      scanBarcode: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>People To Politics</Text>
        </View>
        <View style={styles.data}>
        {(this.state.barcodeData !== null) ?
           this.showProduct() : (this.state.scanBarcode) ? this.showScanContainer() : this.scanButton()
        }
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  data: {
    flex: 4,
    backgroundColor: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: '1em',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    backgroundColor: '#cae1ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: '1em',
  },

});
