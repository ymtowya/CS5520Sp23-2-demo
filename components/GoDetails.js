
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import PressableButton from './PressableButton';
import { useEffect } from 'react';
import { ref, getDownloadURL, storage } from 'firebase/storage';

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function GoDetails({route, navigation, setImageUrl}) {

  const Stack = createNativeStackNavigator();
  // console.log(route);

  useEffect(() => {
    async function imageUrl() {
      try {
        const reference = ref(storage, route.params.goalItem.imageUri);
        const url = await getDownloadURL(reference);
        setImageUrl(url);
      } catch (error) {
        console.error(error);
      }
      
    }
    imageUrl();
  }, []);
  

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
