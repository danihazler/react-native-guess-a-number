import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Card = ( { style, children }) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
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