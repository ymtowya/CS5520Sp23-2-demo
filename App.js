import { StatusBar } from 'expo-status-bar'; // imported from community package
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
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

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
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
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}
