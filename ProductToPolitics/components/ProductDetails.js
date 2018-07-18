import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class ProductDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        productCompanyName: null,
        parentCompanyName: null,
        update: 'this is the initial value',
        url: `https://api.upcitemdb.com/prod/trial/lookup?upc=${this.props.upc}`,
        error: 'none',
      };
    }

  componentDidMount = () => {
    axios.post(this.state.url)
    .then ((response) => {
      this.setState({
        productCompanyName: response,
      })
    })
    .catch(() => {
      this.setState({
        error: 'Unable to find product info',
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>This works</Text>
          <Text>{this.props.productCompanyName}</Text>
          <Text>{this.state.url}</Text>
          <Text>Error: {this.state.error}</Text>
        </View>
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
