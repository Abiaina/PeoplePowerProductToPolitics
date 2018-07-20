import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class FacebookButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#A768FE', '#97B4FA', '#93C6F9']}
          left={[0]}
          right={[0]}
          top={[0]}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,.50)',
              fontSize: 15,
              color: '#fff',
              alignItems: 'center',
              borderRadius: 5,
              padding: 5,
            }}>
            <Text>Sign in with Facebook</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
