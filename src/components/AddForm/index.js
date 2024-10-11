import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";

import { useState } from "react";

import styles from "./styles";

export default function AddForm({ shown, closeModal, addTask }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [hasValidationError, setHasValidationError] = useState(false);

    /**
     * Clear the form errors and input and close the form.
     */
    const clearAndClose = () => {
        // clear errors and input
        setHasValidationError(false);
        setTaskTitle("");
        // close
        closeModal();
    };

    /**
     * Cancel the form and close the modal.
     */
    const onCancelPress = () => {
        clearAndClose();
    };

    /**
     * Validate that we have a title, then add the task and close or show validation error.
     */
    const onAddPress = () => {
        const title = taskTitle.trim();

        // check for a title
        if (title.length === 0) {
            setHasValidationError(true);
            return;
        }

        // add task and close
        addTask(title);
        clearAndClose();
    };

    return (
        <Modal
            visible={shown}
            animationType="fade"
            transparent={true}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Add a Task</Text>

                    <View style={styles.field.container}>
                        <View style={styles.field.label.container}>
                            <Text style={styles.field.label}>Task Name</Text>
                            {hasValidationError &&
                                <Text style={styles.field.label.error}>Required</Text>
                            }
                        </View>
                        <TextInput
                            style={[
                                styles.field,
                                hasValidationError ? styles.field.error : undefined
                            ]}
                            value={taskTitle}
                            onChangeText={setTaskTitle}
                        />
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.actions.cancel, styles.actions.button]}
                            activeOpacity={0.5}
                            onPress={onCancelPress}
                        >
                            <Text style={styles.actions.caption}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.actions.accept, styles.actions.button]}
                            activeOpacity={0.5}
                            onPress={onAddPress}
                        >
                            <Text style={styles.actions.caption}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}