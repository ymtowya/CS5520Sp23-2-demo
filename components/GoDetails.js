
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import PressableButton from './PressableButton';
import { useEffect } from 'react';

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function GoDetails({route, navigation}) {

  const Stack = createNativeStackNavigator();
  // console.log(route);
  

  useEffect(() => {
    navigation.setOptions({
        title: route.params.txt, 
                  headerStyle: { backgroundColor: '#e9e'}, 
                  headerTintColor: '#a51',
                  headerRight: () => {
                    return (<PressableButton
                    customizedStyle={{backgroundColor: 'red'}}
                    buttonPressed={() => {console.log('dsi')}}>
                      A
                    </PressableButton>);
                  }
      });
  });

  return (
    <View>
        <Text>{route.params.txt}</Text>
    </View>
  );

}
