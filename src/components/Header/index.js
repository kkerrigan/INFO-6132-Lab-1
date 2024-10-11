import {Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kristian Kerrigan To-Do App</Text>
            <FontAwesome name="list" size={24} color="black" />
        </View>
    );
}