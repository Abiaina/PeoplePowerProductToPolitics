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
      };
    }

  componentDidMount = () => {
    axios.get(this.state.upcUrl)
    .then ((response) => {
      axios.get(this.state.backendUrl + response.data.items[0].brand)
      .then ((response) => {
        this.setState({
          productCompanyDetails: response.data,
        })
      })
      .catch((error) => {
        this.setState({
          status: error,
        })
      });
    })
    .catch((error) => {
      this.setState({
        status: error,
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>{this.state.productCompanyName}</Text>
          <Text>Error: {this.state.status}</Text>
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
