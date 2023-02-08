

import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import myStyles from '../styles';

export default function PressableButton({buttonPressed, customizedStyle, children}) {

    return (
        <Pressable
            onPress={() => {buttonPressed();}}
            style={({pressed}) => {
                return [{
                    backgroundColor: 'grey',
                    padding: 9
                }, customizedStyle, pressed && myStyles.pressedButton];
            }}
        >
            <Text>
                {children}
            </Text>
        </Pressable>
    );
}