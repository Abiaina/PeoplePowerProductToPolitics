import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Politicians extends React.Component {

  getPolitician = (companyName) => {
    //internal api call to return list of politicians ordered by state/region
    // then by name
    // User has a profile (via OAuth...tells me their region and interests)
    // If possible list regional reps first
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>...Sponsored by: {this.props.test1} ...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
