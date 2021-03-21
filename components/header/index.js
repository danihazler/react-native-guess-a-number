import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
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