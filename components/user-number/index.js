import React from 'react';
import { Text, Button } from 'react-native';
import { SelectedNumber } from '../selected-number';
import { Card } from '../card';
import { styles } from './styles';

export const UserNumber = ({ handleStartGame, value }) => {
    return (
        <Card style={styles.card}>
            <Text>You selected</Text>
            <SelectedNumber value={value} />
            <Button title='START GAME' onPress={() => handleStartGame(value)} />
        </Card>
    )
};