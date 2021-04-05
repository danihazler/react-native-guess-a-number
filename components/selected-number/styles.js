import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.offWhite,
        marginVertical: 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    numberWrapper: {
        backgroundColor: 'white',
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    number : {
        color: Colors.secondary,
        fontSize: 20
    }
});