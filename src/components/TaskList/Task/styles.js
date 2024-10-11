import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        gap: 4,
        padding: 10,
        
        backgroundColor: "#EFEFEF",
        borderRadius: 10,
    },

    title: {
        paddingBottom: 3,

        fontSize: 18,
        fontWeight: "600",
    },

    controlsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    switch: {
        container: {
            flexDirection: "row",
            alignItems: "center",
            gap: Platform.OS === "ios" ? 10 : 5,
        },

        text: {
            width: 40,

            fontSize: 16,
        },

        // scale down switch on iOS, since it's very large by default
        transform:
            Platform.OS === "ios" ?
                [{ scaleX: 0.8 }, { scaleY: 0.8 }] :
                undefined,
    },

    delete: {
        button: {
            padding: 5,
            paddingRight: 10,
        },

        caption: {
            fontWeight: "600",
            color: "#FFF",
        },
    },

    detail: {
        fontSize: 12,
        color: "#888",
    },
});