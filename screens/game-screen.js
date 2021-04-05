import React, { useState, useRef } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { SelectedNumber } from '../components/selected-number';
import { guessNumber } from '../modules/guess-number';

export const GameScreen = ({ userChoice }) => {
    const[currentGuess, setCurrentGuess]= useState(guessNumber(1, 100, userChoice));
    const currentLower = useRef(1);
    const currentGreater = useRef(100);

    const handleGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'}
            ]);
            return;
        }
        if ( direction === 'lower') {
            currentGreater.current = currentGuess;
        } else {
            currentLower.current = currentGuess;
        }
        const nextNumberGuess = guessNumber(
            currentLower.current, 
            currentGreater.current, 
            currentGuess
        );

        setCurrentGuess(nextNumberGuess);
    }

    return (
        <View style={styles.screen}>
            <Text>Computer's Guess</Text>
            <SelectedNumber value={currentGuess} />
            <View style={styles.buttons} >
                <View style={styles.button}>
                    <Button 
                        title="LOWER" 
                        onPress={() => handleGuess('lower')} 
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="GREATER" 
                        onPress={() => handleGuess('greater')} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        marginVertical: 10,
        padding: 20
        
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '80%'
    },
    button: {
        width: '45%'
    }
})