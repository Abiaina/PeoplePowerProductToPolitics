import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AttributeDetail from './AttributeDetail'

export default class CompanyDetails extends React.Component {
  constructor() {
      super();
      this.state = {
        learnMore: false,
      };
    }

  showData() {
    return(
      <View style={styles.dataContainer}>
        <View style={styles.dataHeader}>
          <Text>DataHeading</Text>
        </View>

        <View style={styles.data}>
          <Text>Data1</Text>
        </View>

        <View style={styles.data}>
          <Text>Data2</Text>
        </View>

        <View style={styles.data}>
          <Text>Data3</Text>
        </View>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        {this.state.learnMore ? showData : <AttributeDetail/>}
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
