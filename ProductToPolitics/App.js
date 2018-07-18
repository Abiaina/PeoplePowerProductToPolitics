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
        companyName: 'PepsiCo',
      };
    }

  toggleState = () => {
    this.setState({
        scanBarcode: !this.state.scanBarcode
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


  render() {
    return (
      <View style={styles.container}>

        {(this.state.scanBarcode) ? <ProductDetails
          upc={"028400090858"}/> : this.scanButton() }
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
