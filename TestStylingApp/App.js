import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import CompanyDetails from './components/CompanyDetails';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        home: true,
      };
    }

  render() {
    return (
      <View style={styles.container}>
      <LinearGradient
            colors={['white', '#FDB813']}
            style={{alignItems: 'center', flex: 1, alignSelf: 'stretch' }}>

          <View style={styles.header}>
            <Text>Product To Politics</Text>
          </View>
          <View style={styles.data}>
            <Text>Data I want to show</Text>
          </View>
        </LinearGradient>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    alignSelf: 'stretch',
    height: 75,
    backgroundColor: '#9DD1DB',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: 10,
    position: 'absolute',
  },
  backgroundGradient: {
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
    position: 'absolute',
  },
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 25,
  },
});
