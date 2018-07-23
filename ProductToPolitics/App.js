import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import ScanContainer from './components/ScanContainer'
import ProductDetails from './components/ProductDetails'
import About from './components/About'
import Definition from './components/Definition'

import { BarCodeScanner, Permissions, LinearGradient } from 'expo';


export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        scanBarcode: false,
        barcodeData: null,
        home: true,
      };
      this.handleOnBarcodeScan = this.handleOnBarcodeScan.bind(this);
    }

  toggleState = () => {
    this.setState({
      scanBarcode: !this.state.scanBarcode,
      barcodeData: null,
      home: !this.state.home,
    });
  }

  resetHomeState = () => {
    this.setState({
      scanBarcode: false,
      barcodeData: null,
      home: true,
    });
  }

  homeButton () {
    return (
      <Button onPress={this.resetHomeState}
        title="Home"
        color='green'
        accessibilityLabel="Home"
        />
    )
  }

  scanButton () {
    return (
      <Button onPress={this.toggleState}
        title="Scan Barcode"
        color="#841500"
        accessibilityLabel="Scan barcode"
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
      <LinearGradient
            colors={['white', '#FDB813']}
            style={{alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>

          <View style={styles.header}>
            <Image source={require('./P2.png')}/>
            <Text>Product To Politics</Text>
          </View>
          <View style={styles.data}>
          {(this.state.barcodeData !== null) ?
             this.showProduct() : ((this.state.scanBarcode) ? this.showScanContainer() : this.scanButton())
          }
          </View>
<View>{this.state.home ? <Text></Text> : this.homeButton()}
</View>
          <Definition/>
          <About/>
        </LinearGradient>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    header: {
      alignSelf: 'center',
      height: 150,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      padding: 10,
    },
    backgroundGradient: {
      left: 0,
      right: 0,
      top: 0,
      flex: 1,
      position: 'absolute',
    },
    dataContainer: {
      flex: 4,
      alignSelf: 'stretch',
      backgroundColor: '#f8f8ff',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 10,
    },
    data: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 25,
    },
});
