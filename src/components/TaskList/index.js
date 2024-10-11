/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:01:35 PM
 *  Last update: 2 Oct 2024, 7:06:12 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { FlatList, Text } from "react-native";

import Task from "./Task";

import styles from "./styles";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <FlatList
            data={tasks}
            renderItem={
                ({ item }) => (
                    <Task
                        task={item}
                        onToggleTaskStatus={() => toggleTask(item.id)}
                        onDeleteTask={() => deleteTask(item.id)}
                    />
                )
            }
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => 
                <Text style={styles.emptyText}>Add a task to get started!</Text>
            }
        />
    );
}