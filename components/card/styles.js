import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        // shadows below work only on iOs
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowRadius: 3,
        shadowOpacity: .26,
        elevation: 5, // Android shadow
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
    },
});