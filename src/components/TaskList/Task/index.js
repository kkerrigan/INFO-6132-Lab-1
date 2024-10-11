import { View, Text, Switch } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { accentColor, negativeColor } from "../../../includes/structure";
import styles from "./styles";

export default function Task({ task, onToggleTaskStatus, onDeleteTask }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <View style={styles.controlsContainer}>
                <View style={styles.switch.container}>
                    <Text style={styles.switch.text}>{task.status ? "Done" : "Due"}</Text>
                    <Switch
                        style={styles.switch}
                        value={task.status}
                        trackColor={{ false: "#DDD", true: accentColor }}
                        ios_backgroundColor="#DDD"
                        thumbColor="#FFF"
                        onChange={onToggleTaskStatus}
                    />
                </View>

                <MaterialIcons.Button
                    name="delete-forever"
                    size={21}
                    color="#FFF"
                    backgroundColor={negativeColor}
                    style={styles.delete.button}
                    activeOpacity={0.5}
                    underlayColor="#EFEFEF"
                    onPress={onDeleteTask}
                >
                    <Text style={styles.delete.caption}>Delete</Text>
                </MaterialIcons.Button>
            </View>
            <Text style={styles.detail}>{task.id}</Text>
        </View>
    );
}