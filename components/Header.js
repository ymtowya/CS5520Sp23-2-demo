import { View, Text } from 'react-native'
import React from 'react'
import Input from './Input';

export default function Header({ appName, color }) {

  const styles = {
    color: color
  };

  return (
    <View>
      <Text>====================================</Text>
      <Text style={styles}>Welcome to {appName}</Text>
      {/* <Text style={styles}>
        You just typed these : {number}
      </Text> */}
    </View>
  )
};
