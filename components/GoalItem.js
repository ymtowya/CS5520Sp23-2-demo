import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import myStyles from '../styles';
export default function GoalItem(props) {
    const t = props.item;
    const d = props.onDelete;
    const onGoalPress = props.onGoalPress;

    let onP2 = function p2() {
        // console.log("Pressed!");
        onGoalPress();
    };
    
    const android_ripple_config = {
        color: '#3d7fe1',
        foreground: true,
        borderless: false,

    };

    return (
        <View key={t.key}
        >
        <Pressable
            style={myStyles.unit}
            onPressIn={() => { onP2(); }}
            android_ripple={android_ripple_config}
        >
            
                <Text>
                    {Math.floor(t.key*100)} - {t.text}
                </Text>
                
                <Button 
                    title='X'
                    onPress={() => {d(t.key);}}
                    color={'grey'}
                ></Button>

        </Pressable>
        </View>
        
    );
};