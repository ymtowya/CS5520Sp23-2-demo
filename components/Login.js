import { View, TextInput, Text, Button } from 'react-native'
import React, { useState } from 'react'
import myStyles from '../styles';
import PressableButton from './PressableButton';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FIREBASE/firebase-setup';
import { async } from '@firebase/util';

export default function Login({route, navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async () => {
        try {
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCred.user.email);
        } catch (error) {
            console.error(error);
        }
    };

    const signupHandler = () => {
        navigation.replace("Signup");
    };

    return (
        <View>
            <Text>Email</Text>
            <TextInput 
                value={email}
                onChangeText={(newText) => {setEmail(newText);}}
            />
            <Text>Password</Text>
            <TextInput 
                value={password}
                onChangeText={(newText) => {setPassword(newText);}}
                secureTextEntry={true}
            />
            <Button title="Login" onPress={loginHandler}/>
            <Button title="New User? Create account" onPress={signupHandler} />
        </View>
    );
};