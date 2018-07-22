import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class ScrollElement extends Component {

  render() {

    return (
    <View>

      <View style={styles.listContainer}>
        <Text> Tope Recipients </Text>

        <FlatList
          data={this.props.topRecipients}
          renderItem={({item}) =>
          <Text style={styles.item}>
            {item.name}
          </Text>}
        />
      </View>

      <View style={styles.listContainer}>
        <Text> Company Share Holders: </Text>
        <FlatList
          data={this.props.companyShareHolders}
          renderItem={({item}) =>
          <Text style={styles.item}>
            {item.name}
          </Text>}
        />
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    height: 300,
   padding: 10
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
})
