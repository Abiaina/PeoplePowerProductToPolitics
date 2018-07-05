import React from 'react';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';


export default class BarcodeScanner extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        hasCameraOk: null,
      }
    }

  async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({hasCameraOk: status === 'granted'});
      }

  _handleBarCodeRead = data => {
        this.setState({qrcode: data})
      };

  showDetails() {
    if(this.state.showProduct){
      return(
        <Barcode
          barcode={this.state.qrcode}
        />
      )
    };
  }


  render() {
    const { hasCameraOk } = this.state;

    if (hasCameraOk === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraOk === false) {
      return <Text>No access to camera</Text>;
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
            {this.state.qrcode ? <Text>{JSON.stringify(this.state.qrcode)}</Text> : null}
        </View>
      );
  }
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
