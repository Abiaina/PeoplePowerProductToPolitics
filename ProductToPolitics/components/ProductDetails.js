import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class ProductDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        productCompanyDetails: null,
        update: 'this is the initial value',
        backendUrl: `https://p4api.herokuapp.com/company_details/`,
        upcUrl: 'https://api.upcitemdb.com/prod/trial/lookup?upc=',
        status: 'none',
        brand: null,
      };
    }

  getCompanyPolitics = () => {
    console.log(this.state.backendUrl + this.state.brand)

    axios.get(this.state.backendUrl + this.state.brand)
    .then ((response) => {
      console.log('made it to the backend call')
      console.log(response.data)
      this.setState({
        productCompanyDetails: response.data,
      })
    })
    .catch((error) => {
      this.setState({
        status: error,
      })
    });
  }

  componentDidMount = () => {
    axios.get(this.state.upcUrl + String(this.props.barcode))
    .then ((response) => {
      console.log('made it to the upc api call')
      console.log(this.state.upcUrl + String(this.props.barcode))
      console.log('this is the response:', response.data)
      console.log(response.data.items[0].brand)
      this.setState({
        brand: response.data.items[0].brand,
      }, this.getCompanyPolitics)
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        status: error,
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>{this.props.barcode}</Text>
          <Text>{this.state.productCompanyDetails}</Text>
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
