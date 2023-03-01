import { View, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from 'react-native'
import React from 'react'
import Input from './Input';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Header({ appName, color }) {

  const {height, width} = useWindowDimensions();

  const styles = {
    color: color
  };

  console.log(width);
  let paddingVerticalDynamic = 1;
  // paddingVerticalDynamic = width < 380 ? 5 : 0;
  paddingVerticalDynamic = Platform.OS === "android" ? 9 : 7;

  return (
    <View>
      <Text>====================================</Text>
      <Text style={[styles, newstyles.text, {
        paddingVertical: paddingVerticalDynamic,
      }]}>Welcome to {appName} - {paddingVerticalDynamic}</Text>
      {/* <Text style={styles}>
        You just typed these : {number}
      </Text> */}
    </View>
  )
};


const newstyles = StyleSheet.create({
  text: {
    fontSize: windowHeight > 100 ? 28 : 10,
    borderBottomWidth: Platform.select({
      ios: 5,
      android: 3,
    })
  }
});
