import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SelectedNumber } from '../components/selected-number';
import { guessNumber } from '../modules/guess-number';

export const GameScreen = ({ userChoice }) => {
    const[currentGuess, setCurrentGuess]= useState(guessNumber(1, 100, userChoice));

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <SelectedNumber value={currentGuess} />
            <View style={styles.buttons} >
                <Button title="LOWER" />
                <Button title="GREATER" />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        marginVertical: 22
    },
    buttons: {
        flexDirection: 'row'
    }
})