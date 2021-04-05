import React from 'react';
import { View, Text } from 'react-native';
import { Card } from '../card';
import { styles } from './styles';

export const SelectedNumber = ({ value }) => {
    return (
        <Card style={styles.card}>
            <View style={styles.numberWrapper}>
                <Text style={styles.number}>{value}</Text>
            </View>
        </Card>
    )
}