import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Home from './components/Home';
import ScrollElement from './components/ScrollElement';
import CompanyDetails from './components/CompanyDetails';
import { LinearGradient } from 'expo';



// Works with an array of the values to show
export default class SampleScroll extends React.Component {
    renderImages = () => {

      const images = [
      "Capito, Shelley Moore (R-WV)","Cohen, Steve (D-TN)","Collins, Susan M (R-ME)","Conaway, Mike (R-TX)","Dingell, Debbie (D-MI)","Foxx, Virginia (R-NC)", "Frelinghuysen, Rodney (R-NJ)",
            "Grijalva, Raul M (D-AZ)"
      ];

    return images.map((d,i) => (
      <View key={i}>
        <Text> {d} </Text>
      </View>
      ));
  };

  render() {
    return (
        <LinearGradient
          colors={['#9DD1DB', 'white']}
          style={styles.backgroundGradient}>

            <View style={styles.data}>
               <ScrollView vertical>
                 {this.renderImages()}
              </ScrollView>
            </View>

        </LinearGradient>
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
      height: 150,
      alignSelf: 'stretch',
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
      height: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      padding: 10,
      alignSelf: 'stretch',
    },
});
