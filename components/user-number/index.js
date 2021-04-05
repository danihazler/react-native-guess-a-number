import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../../constants/colors';
import { SelectedNumber } from '../selected-number';
import { Card } from '../card';

export const UserNumber = ({ handleStartGame, value }) => {
    return (
        <Card style={styles.card}>
            <Text>You selected</Text>
            <SelectedNumber value={value} />
            <Button title='START GAME' onPress={() => handleStartGame(value)} />
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    }
})