import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';
import { Card } from '../components/card';
import { Input } from '../components/input';

export const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.card}>
                <Text>Select a number</Text>
                <Input 
                    style={styles.input} 
                    keyboardType="number-pad"  
                    maxLength={2} 
                    blurOnSubmit 
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="Reset" color={Colors.secondary} onPress={() => {}} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
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