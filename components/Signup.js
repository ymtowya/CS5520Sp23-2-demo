import { View, TextInput, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import myStyles from '../styles';
import PressableButton from './PressableButton';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FIREBASE/firebase-setup';

export default function Signup({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const clearUp = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const loginHandler = () => {
        navigation.replace('Login');
    };

    const signupHandler = async () => {
        if (password !== confirmPassword) {
            Alert.alert("PWD not matched!");
            return;
        }
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Registered!", userCred.user.email);
            clearUp();
        } catch (error) {
            console.error("Sign up error : ", error);
        }
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
            <Text>Confirm Password</Text>
            <TextInput 
                value={confirmPassword}
                onChangeText={(newText) => {setConfirmPassword(newText);}}
                secureTextEntry={true}
                
            />
            <Button title="Register" onPress={signupHandler}/>
            <Button title="Already Register? Login" onPress={loginHandler} />
        </View>
    );
};