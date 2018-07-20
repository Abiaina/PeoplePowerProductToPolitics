import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {

    return (
      <View style={styles.container}>

          <View style={styles.data}>
            <Text style={{alignSelf: 'center'}}>How we work</Text>
            <Text>Ever wonder about the companies you interact {'with'} everyday {'?'} </Text>
            <Text>Scan any barcode {'of'} a product</Text>
            <Text>Learn the political impacts {'of'} your purchase</Text>
          </View>

          <View style={styles.data}>
            <Text style={{alignSelf: 'center'}}>Data Source</Text>
            <Text>Open Secrets</Text>
            <Text>Upc code api</Text>
            <Text>100 Companies List</Text>
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
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 10,
    alignSelf: 'stretch',
  },
});
