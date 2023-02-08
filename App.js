import { StatusBar } from 'expo-status-bar'; // imported from community package
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import GoalItem from './components/GoalItem';
import Header from './components/Header';
import Input from './components/Input';
import myStyles from './styles';

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function App() {

  const appName = 'that app Eiwta';

  const [inputMemo, setInputMemo] = useState('');
  const [goals, setGoals] = useState([]);
  function onTextEntered(text) {
    setInputMemo(text);
  }

  function onp() {
    const newGoal = {text: inputMemo, key: Math.random()};
    setGoals((pgoals) => [...pgoals, newGoal]); // pass in a function instead of the value if we want to update it based on previous value
  }

  function onDelPress(deletedId) {
    // console.log('Delete tihs one ', deletedId);
    setGoals((preGoal) => {
      return preGoal.filter((g) => {return g.key !== deletedId})
    });
  }

  function onPressArea(item) {
    console.log("This one is pressed: " + Math.floor(item.key * 100));
  }

  return (
    <View style={styles.container}>

      <Header appName = {appName} color="blue"></Header>
      <StatusBar style="auto" />
      <Input sendChangedText={onTextEntered}></Input>
      <Text>{inputMemo}</Text>
      <Button title='Test' onPress={onp}></Button>
      <View style={myStyles.parent}>
        <FlatList
          data={goals}
          contentContainerStyle={myStyles.buttomContainer}
          renderItem={(g) => {return (
            <GoalItem 
              item={g.item} 
              onDelete={onDelPress}
              onGoalPress={() => { onPressArea(g.item); } }></GoalItem>
          
          // <View style={myStyles.unit} key={g.item.key}>
          //   <Text>
          //     {Math.floor(g.item.key*100)} - {g.item.text}
          //   </Text>
          // </View>
          // or you can take {item} as the argument instead of g

          // in flat list, the value is super big with all those information. Like key, or others
          )}}
        >
        </FlatList>
        {/* <ScrollView contentContainerStyle={myStyles.buttomContainer}
          alwaysBounceVertical={true}
        >
          {
            goals.map((t) => {
              return (<View style={myStyles.unit} key={t.key}>
                <Text>
                  {Math.floor(t.key*100)} - {t.text}
                </Text>
              </View>
              )
            })
          }
        </ScrollView> */}
      </View>

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
