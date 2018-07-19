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
        url: `https://p4api.herokuapp.com/company_details/Nestle%20SA`,
        status: 'none',
      };
    }

  componentDidMount = () => {
    axios.get(this.state.url)
    .then ((response) => {
      this.setState({
        productCompanyName: response.data.company_name,
        status: 'Complete'
      })
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
