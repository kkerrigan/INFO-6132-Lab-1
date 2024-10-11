import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 15,
        paddingBottom: Platform.OS === "ios" ? 90 : 75,
        gap: 15,
    },

    emptyText: {
        alignSelf: "center",

        fontSize: 18,
    },
});