import { View, TextInput, Text, Button } from 'react-native'
import React, { useState } from 'react'
import myStyles from '../styles';
import PressableButton from './PressableButton';
import ImageManager from './ImageManager';

export default function Input({ sendChangedText, cancelPressed, imageUriHandler }) {

  const [imgUri, setImgUri] = useState('');

  const [number, setNumber] = useState(7);

  function changeTextHandler(text) {
    setNumber(text);
    sendChangedText(text);
  }

  const imageUriHandler2 = (uri) => {
    setImgUri(uri);
  }


  return (
    <View
        style={{
          alignItems: 'center'
        }}
    >
        <TextInput
            value={number}
            onChangeText={changeTextHandler}
            style={{backgroundColor: 'pink'}}
            placeholder='Type your content here'
        ></TextInput>

        {/* <View style={myStyles.textContainer}>
          <Text style={myStyles.textStyle}>
            ejskncxqlmxqop adljncpoa bsajkdni
          </Text>
        </View> */}

        <PressableButton
          buttonPressed={() => {
            cancelPressed();
          }}
        >
          <Text>
            Cancel
          </Text>
        </PressableButton>

        <ImageManager 
          imageUriHandler={imageUriHandler}
        />
        

        {/* <View>
          <Button title='Test here'
            onPress={() => {} }
          ></Button>
        </View> */}
    </View>
  )
}