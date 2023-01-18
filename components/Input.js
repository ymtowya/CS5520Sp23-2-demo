import { View, TextInput, Text } from 'react-native'
import React, { useState } from 'react'

export default function Input({ sendChangedText }) {

  const [number, setNumber] = useState(7);

  function changeTextHandler(text) {
    setNumber(text);
    sendChangedText(text);
  }
  return (
    <View>
        <TextInput
            value={number}
            onChangeText={changeTextHandler}
            style={{backgroundColor: 'yellow', position: 'center'}}
            placeholder='Type your content here'
        ></TextInput>
    </View>
  )
}