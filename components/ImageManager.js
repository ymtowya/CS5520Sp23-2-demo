import { View, TextInput, Text, Button, Pressable, Alert, ImageComponent, Image } from 'react-native'
import React, { useState } from 'react'
import myStyles from '../styles';
import PressableButton from './PressableButton';
import * as ImagePicker from 'expo-image-picker';
import { async } from '@firebase/util';

export default function ImageManager({ sendChangedText, imageUriHandler }) {

    const [status, requestPermission] = ImagePicker.useCameraPermissions();

    let [imgSrc, setImgSrc] = useState('');

    async function verifyPermission() {
        if (status.granted) {
            return true;
        }
        try {
            const permissionResult = await requestPermission();
            return permissionResult.granted;
        } catch (err) {
            console.error(err);
        }
        console.log(status);
    }

    async function imageHandler() {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
            Alert.alert("You need to give permit to camera!");
            return;
        }
        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true
            });
            // setXXX is async
            setImgSrc(result.assets[0].uri);
            // console.log(imgSrc);
            imageUriHandler(result.assets[0].uri);

        } catch (error) {
            console.error(error);
        }
        
    }


    return (
        <View>
            <Pressable onPress={() => imageHandler()}>
                <Text>
                    Add a photo
                </Text>
            </Pressable>

            {imgSrc && (<Image
                source={{
                    uri: imgSrc || ""
                }}
                style={{height: 50, width: 50}}
            >
            </Image>)}
        </View>
    );
};