import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import myStyles from '../styles';
import PressableButton from './PressableButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function GoalUsers(props) {

    const [usernames, setUserNames] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                // console.log(response);
                if (!response.ok) {
                    throw new Error("HTTP error");
                }
                let arrs = await response.json();
                const names = arrs.map((elem) => {return elem.name});
                //update users names state variable
                setUserNames(names);
                // success
                // console.log("Fetch success");
            } catch (error) {
                console.error(error);
            }
            
        }
        getUser();
    }, []);

    async function addUser(params) {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: 'Towyaaaa',
                        task: 'C++'
                    })
                }
            );
            if (!response.ok) {
                throw new Error("HTTP error");
            }
            let resp = await response.json();
            setUserNames((prev) => {return [...prev, resp.name];});
            console.log(resp);
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View>
            <Text>
                GoalUsers:
            </Text>
            <FlatList
                data={usernames}
                renderItem={({ item }) => {return (
                    <Text>{item}</Text>
                );}}
            >
            </FlatList>
            <Button 
                title={"Add me as a user"}
                onPress={() => {addUser();}}
            >
            </Button>
        </View>
    );
};