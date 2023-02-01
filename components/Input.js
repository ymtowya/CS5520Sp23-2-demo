import { View, TextInput, Text, Button } from 'react-native'
import React, { useState } from 'react'
import myStyles from '../styles';

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
            style={{backgroundColor: 'pink'}}
            placeholder='Type your content here'
        ></TextInput>

        <View style={myStyles.textContainer}>
          <Text style={myStyles.textStyle}>
            ejskncxqlmxqop adljncpoa bsajkdni
          </Text>
        </View>

        <View>
          <Button title='Test here'
            onPress={() => {} }
          ></Button>
        </View>
    </View>
  )
}