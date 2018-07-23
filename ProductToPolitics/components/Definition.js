import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal'; // 2.4.0


export default class Definition extends Component {
  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>{'CONTRIBUTION DOLLARS -  For 2018 election cycle, organizations whose PAC or employees and their families made contributions to candidates, party committees, other PACs, outside spending groups or tax-exempt organization organized under IRS Section 527 created to influence the selection, nomination, election, appointment or defeat of candidates to federal, state or local public office.'}</Text>

      <Text>{'LOBBYING DOLLARS - Funds spent on the lobbying industry to advocate on the behalf of corporations, trade groups and nonprofit organizations. Lobbyists pursue relationships with lawmakers in order to shape legislation, and are frequently targeted by lawmakers as sources of campaign money, which the lobbyists feel beholden to give to improve their clients prospects of success.'}</Text>

      <Text>{'SHARE HOLDERS - Politicians that own shares in the company.'}</Text>

      <Text>{'TOP RECIPIENTS - Organizations and politicians that recieved the largest donations.'}</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this._renderButton('Definitions', () => this.setState({ visibleModal: 1 }))}
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
