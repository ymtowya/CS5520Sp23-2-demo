import { StatusBar } from 'expo-status-bar'; // imported from community package
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function App() {

  const appName = 'that app Eiwta';

  return (
    <View style={styles.container}>

      <Header appName = "my app Yumii"></Header>
      <Header appName = "your app Jiora"></Header>
      <Header appName = "their app Domineo" color = "red"></Header>
      <Header appName = {appName}></Header>
      <StatusBar style="auto" />

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
