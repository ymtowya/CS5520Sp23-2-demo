import { StatusBar } from 'expo-status-bar'; // imported from community package
import { useEffect, useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import GoalItem from './components/GoalItem';
import Header from './components/Header';
import Input from './components/Input';
import PressableButton from './components/PressableButton';
import Home from './components/Home';
import myStyles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GoDetails from './components/GoDetails';
import GoalUsers from './components/GoalUsers';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FIREBASE/firebase-setup';
import { AntDesign } from '@expo/vector-icons';
import { async } from '@firebase/util';

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function App() {

  const Stack = createNativeStackNavigator();
  const [isUserAthed, setUserAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        setUserAuth(true); // a valid user
      } else {
        setUserAuth(false);
      }
    })
  }, []);

  const authStack = (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );

  const appStack = (
    <>
        <Stack.Screen name="Home" component={Home} 
          options={({navigation}) => {
            return {
              headerRight: () => {
                return (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Profile");
                    }}
                  >
                    <AntDesign name="user" size={22} color="black" />
                  </Pressable>
                );
              }
            }
          }}
        />
        <Stack.Screen name="Profile" component={Profile} 
          options={({navigation}) => {
            return {
              headerRight: () => {
                return (
                  <Pressable
                    onPress={async () => {
                      try {
                        const res = await auth.signOut();
                        console.log(res);
                      } catch (error) {
                        console.error(error);
                      }
                      
                    }}
                  >
                    <AntDesign name="logout" size={22} color="black" />
                  </Pressable>
                );
              }
            }
          }}
        />
        <Stack.Screen name="Users" component={GoalUsers} />
        <Stack.Screen name="Details" component={GoDetails} 
          options={({ route }) => {
            // console.log(data);
            return {title: route.params.txt, 
              headerStyle: { backgroundColor: '#e9e'}, 
              headerTintColor: '#a51',
              headerRight: () => {
                return (<PressableButton
                customizedStyle={{backgroundColor: 'red'}}
                buttonPressed={() => {console.log('dsi')}}>
                  A
                </PressableButton>);
              }};
          }}
        />
    </>
  );

  return (
    <NavigationContainer
    >
      <Stack.Navigator>

        {isUserAthed ? appStack : authStack}
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}
