import { StyleSheet } from 'react-native';
import { rootColor, safeAreaPadding } from '../../includes/structure';

export default StyleSheet.create({
    container: {
        flexDirecton: "row",
        justifyContent: "center",
        gap: 10,
        padding: 10,
        paddingTop: safeAreaPadding,
        backgroundColor: rootColor,
        borderBottomWidth: 2,
        borderBottomColor: "#000"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});