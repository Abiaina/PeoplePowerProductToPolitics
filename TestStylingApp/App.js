import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import CompanyDetails from './components/CompanyDetails'

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
        home: false,
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        {this.state.home ? <Home/> : <CompanyDetails/>}
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
    alignSelf: 'stretch',
    height: 75,
    backgroundColor: '#cae1ff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: 10,
  },
});
