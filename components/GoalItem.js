import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import myStyles from '../styles';
export default function GoalItem(props) {
    const t = props.item;
    const d = props.onDelete;
    return (
        <View style={myStyles.unit} key={t.key}>
            <Text>
                {Math.floor(t.key*100)} - {t.text}
            </Text>
            <Button 
                title='X'
                onPress={() => {d(t.key);}}
                color={'grey'}
            ></Button>
        </View>
    );
};