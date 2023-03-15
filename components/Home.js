import { StatusBar } from 'expo-status-bar'; // imported from community package
import { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import GoalItem from './GoalItem';
import Header from './Header';
import Input from './Input';
import PressableButton from './PressableButton';
import myStyles from '../styles';
import { deletefromDb, writeToDB } from '../FIREBASE/FireStoreHelper';
import { collection, query, where, onSnapshot, deleteDoc } from "firebase/firestore";
import { firestore } from '../FIREBASE/firebase-setup';

// "portrait"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Don't forget the tunnel argument!
// npx expo start --tunnel

export default function Home({navigation}) {

  const appName = 'that app Eiwta';

  const [inputMemo, setInputMemo] = useState('');
  const [goals, setGoals] = useState([]);
  function onTextEntered(text) {
    setInputMemo(text);
  }

  useEffect(() => {
      
      const unsubscribe = onSnapshot(collection(firestore, "goals"), (querySnapShot) => {
        if (querySnapShot.empty) {
          setGoals([]);
        } else {
          let goalsfromdb = [];
          querySnapShot.docs.forEach((snapDoc) => {
            goalsfromdb.push({...snapDoc.data(), id: snapDoc.id});
          });
          setGoals(goalsfromdb);
        }
        // console.log(JSON.stringify(querySnapShot.docs[0]));
      });
      // return a clean up func
      return () => {
        // detach listener
        unsubscribe();
      }
  }, []); // dependency arr

  

  function onp() {
    const newGoal = {text: inputMemo, key: Math.random()};
    // setGoals((pgoals) => [...pgoals, newGoal]); // pass in a function instead of the value if we want to update it based on previous value
    writeToDB({
      data: newGoal
    });
  }

  function onDelPress(deletedId) {
    console.log('Delete tihs one ', deletedId);
    setGoals((preGoal) => {
      return preGoal.filter((g) => {return g.key !== deletedId})
    });
  }

  function onPressArea(item) {
    console.log("This one is pressed: " + Math.floor(item.key * 100));
    // onDelPress(item.key);
    deletefromDb({docid: item.id});
  }

  function cancelPressed() {
    // setGoals((goals) => []);
    setInputMemo('');
    //navigation.navigate('Details', { txt: 'yugyuguj' });
    navigation.navigate('Users', { txt: 'yugyuguj' });
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <Button title="Login" onPress={() => { 
        console.log("DHSUHSDID");
        navigation.navigate("Login"); 
        }} />

      {/* <Input 
        sendChangedText={onTextEntered}
        cancelPressed={cancelPressed}
        style={styles.inputBox}
      ></Input>
      <Text>{inputMemo}</Text>

      <Button title='Test' onPress={onp}></Button>
      <PressableButton buttonPressed={onp} buttonText={'TEST 2'}>
        <Text>TEST 2</Text>
      </PressableButton>
      <Header appName = {appName} color="blue"></Header> */}
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

      </View>
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
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputBox: {
    width: 390,
    backgroundColor: '#11aa22',

  }
});
