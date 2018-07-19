import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AttributeDetail extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <View style={styles.dataHeader}>
            <Text>DataHeading</Text>
          </View>
          <View style={styles.data}>
            <Text>Data</Text>
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
