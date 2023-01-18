import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {

  console.log(props);

  return (
    <View>
      <Text>====================================</Text>
      <Text>Welcome to {props.appName}</Text>
    </View>
  )
}
