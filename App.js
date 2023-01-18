import { StatusBar } from 'expo-status-bar'; // imported from community package
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function App() {

  const appName = 'that app Eiwta';

  const [inputMemo, setInputMemo] = useState('');
  function onTextEntered(text) {
    setInputMemo(text);
  }

  return (
    <View style={styles.container}>

      <Header appName = {appName} color="blue"></Header>
      <StatusBar style="auto" />
      <Input sendChangedText={onTextEntered}></Input>
      <Text>{inputMemo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
