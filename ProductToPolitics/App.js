import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import ScanContainer from './components/ScanContainer'
import ProductDetails from './components/ProductDetails'
import { BarCodeScanner, Permissions, LinearGradient } from 'expo';



export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        scanBarcode: false,
        barcodeData: null,
        about: false,
        home: false,
      };
      this.handleOnBarcodeScan = this.handleOnBarcodeScan.bind(this);
    }

  toggleState = () => {
    this.setState({
      scanBarcode: !this.state.scanBarcode,
      barcodeData: null,
    });
  }
  //
  // toggleHomeState = () => {
  //   this.setState({
  //     home: !this.state.home,
  //     barcodeData: null,
  //     scanBarcode: false,
  //   });
  // }
  //
  // toggleHomeState = () => {
  //   this.setState({
  //     about: !this.state.about,
  //   });
  // }

  scanButton () {
    return (
      <Button onPress={this.toggleState}
        title="Scan Barcode"
        color="#841500"
        accessibilityLabel="Scan barcode"
        />
    )
  }

  // homeButton () {
  //   return (
  //     <Button onPress={this.toggleHomeState}
  //       title="Home"
  //       color='green'
  //       accessibilityLabel="Home"
  //       />
  //   )
  // }
  //
  // aboutButton () {
  //   return (
  //     <Button onPress={this.toggleAboutState}
  //       title="About"
  //       color='blue'
  //       accessibilityLabel="About"
  //       />
  //   )
  // }

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
      height: 200,
      backgroundColor: 'white',
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
