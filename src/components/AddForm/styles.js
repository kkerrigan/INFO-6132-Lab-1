import { StyleSheet } from "react-native";

import { negativeColor, positiveColor } from "../../includes/structure";

export default StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#0004",
    },

    container: {
        gap: 15,
        maxWidth: "80%",
        padding: 10,

        backgroundColor: "#FFF",
        borderRadius: 10,
    },

    title: {
        fontSize: 22,
        fontWeight: "700",
    },

    field: {
        minWidth: "100%",
        padding: 10,

        borderWidth: 1,
        borderColor: "#EFEFEF",
        borderRadius: 5,

        fontSize: 16,

        container: {
            gap: 7,
        },
        
        label: {
            fontSize: 15,
            fontStyle: "italic",
            fontWeight: "500",

            container: {
                flexDirection: "row",
                justifyContent: "space-between",
            },

            error: {
                color: negativeColor,
            },
        },

        error: {
            borderColor: negativeColor,
        },
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",

        button: {
            padding: 8,
            borderRadius: 5,
        },

        cancel: {
            backgroundColor: negativeColor,
        },

        accept: {
            backgroundColor: positiveColor,
        },

        caption: {
            fontWeight: "600",
            color: "#FFF",
        },
    },
});