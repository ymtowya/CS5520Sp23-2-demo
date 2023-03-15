import { View, TextInput, Text, Button } from 'react-native'
import React, { useState } from 'react'
import myStyles from '../styles';
import PressableButton from './PressableButton';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FIREBASE/firebase-setup';
import { async } from '@firebase/util';

export default function Profile({route, navigation}) {

    const user = auth.currentUser; // another way we get the user

    return (
        <View>
            <Text>
                {user.email}
            </Text>
            <Text>
                {user.uid}
            </Text>
        </View>
    );
};