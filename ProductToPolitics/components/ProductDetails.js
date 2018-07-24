import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import { BarCodeScanner, Permissions, LinearGradient } from 'expo';




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
        topRecipients: [],
        companyShareHolders: [],
        contributionDollars: "",
        mostLobbiedBill: "",
        list: ["Capito, Shelley Moore (R-WV)","Cohen, Steve (D-TN)","Collins, Susan M (R-ME)","Conaway, Mike (R-TX)","Dingell, Debbie (D-MI)","Foxx, Virginia (R-NC)", "Frelinghuysen, Rodney (R-NJ)",
              "Grijalva, Raul M (D-AZ)"]
        };
    }

  getCompanyPolitics = () => {
    axios.get(this.state.backendUrl + this.state.brand)
    .then ((response) => {
      const data = response.data;

      this.setState({
        parentCompany: data.company_name,
        lobbyingDollars: data.lobbying_dollars,
        topRecipients: data.top_recipients,
        companyShareHolders: data.company_share_holders,
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
console.log(this.state.topRecipients);

    return (
      <ScrollView>
        <View style={styles.dataContainer}>
          <View style={styles.dataHeader}>
            <Text>{this.state.brand} is a subsidiary of {this.state.parentCompany}</Text>
          </View>
          <View style={styles.dataHeader}>
            <Text>Political Activity of {this.state.parentCompany}</Text>
          </View>

          <View style={styles.data}>
            <Text>Lobbying Dollars: ${this.state.lobbyingDollars}</Text>
          </View>

          <View style={styles.data}>
            <Text>Contribution Dollars: ${this.state.contributionDollars}</Text>
          </View>

          <View style={styles.dataList}>
            <LinearGradient
              colors={['#9DD1DB', 'white']}
              style={styles.backgroundGradient}>

                <Text>Top Contribution Dollar Recipients</Text>
                  <FlatList
                    data={this.state.topRecipients}
                    renderItem={({item}) => (
                      <Text>{item.name}</Text>
                     )}
                  />
            </LinearGradient>
          </View>

          <View style={styles.data}>
                <Text>Company Share Holders</Text>
                <FlatList
                  data={this.state.companyShareHolders}
                  renderItem={({item}) => (
                    <Text>{item.name}</Text>
                   )}
                />
          </View>

          <View style={styles.data}>
            <Text>Most Lobbied Bill: {this.state.mostLobbiedBill}</Text>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 15,
    borderRadius: 4,
    borderColor: 'rgba(10, 10, 10, 0.2)',
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
