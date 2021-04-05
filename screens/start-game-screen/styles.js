import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        width: '20%',
        textAlign: 'center'
    }
});