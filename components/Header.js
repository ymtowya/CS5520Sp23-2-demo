import { View, Text } from 'react-native'
import React from 'react'

export default function Header({ appName, color }) {

  console.log(color);

  return (
    <View>
      <Text>====================================</Text>
      <Text>Welcome to {appName}</Text>
    </View>
  )
}
