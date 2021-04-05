import React, { useState, useRef } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { guessNumber } from '../../modules/guess-number';
import { SelectedNumber } from '../../components/selected-number';
import { styles } from './styles';

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