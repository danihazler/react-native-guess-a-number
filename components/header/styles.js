import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
    header: {
        height: 90,
        width: "100%",
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "#000",
        fontSize: 18
    }
});