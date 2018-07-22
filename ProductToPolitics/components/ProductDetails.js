import React from 'react';
import axios from 'axios';
import ScrollElement from './ScrollElement'
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class ProductDetails extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        update: 'this is the initial value',
        backendUrl: `https://p4api.herokuapp.com/company_details/`,
        upcUrl: 'https://api.upcitemdb.com/prod/trial/lookup?upc=',
        status: 'none',
        brand:'none',
        parentCompany: "",
        lobbyingDollars: "",
        topRecipients: "",
        companyShareHolders: "",
        contributionDollars: "",
        mostLobbiedBill: "",
      };
    }

// map also does this?
  mapData = (data) => {
    const array = {};

    for(i in data) {
      array[name] = data[i].name;
    }
    return array
  }

  getCompanyPolitics = () => {
    axios.get(this.state.backendUrl + this.state.brand)
    .then ((response) => {
      const data = response.data;
      const companyShareHolders = data.company_share_holders[0].name;
      const topRecipients = this.mapData(data.top_recipients);

      this.setState({
        parentCompany: data.company_name,
        lobbyingDollars: data.lobbying_dollars,
        topRecipients: topRecipients,
        companyShareHolders: companyShareHolders,
        contributionDollars: data.contribution_dollars,
        mostLobbiedBill: data.most_lobbied_bill.name,
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
      <View>
        <View style={styles.dataContainer}>
          <View style={styles.dataHeader}>
            <Text>{this.state.brand} is a subsidiary of {this.state.parentCompany}</Text>
          </View>
          <View style={styles.dataHeader}>
            <Text>Political Activity of {this.state.parentCompany}</Text>
          </View>

          <View style={styles.data}>
            <Text>Lobbyinng Dollars: ${this.state.lobbyingDollars}</Text>
          </View>

          <View style={styles.data}>
            <Text>Contribution Dollars: ${this.state.contributionDollars}</Text>
          </View>

          <View style={styles.data}>
            <ScrollView style={{flex:1}}>
              <Text>Top Recipients: {this.state.topRecipients}</Text>
              companyShareHolders={this.state.ccompanyShareHolders}
            </ScrollView>
          </View>

          <View style={styles.data}>
            <ScrollView style={{flex:1}}>
              <Text>Company Share Holders: {this.state.ccompanyShareHolders}</Text>
            </ScrollView>
          </View>

          <View style={styles.data}>
            <Text>Most Lobbied Bill: {this.state.mostLobbiedBill}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25,
  },
  dataHeader: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#baedd3',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 10,
    alignSelf: 'stretch',
  },
});
