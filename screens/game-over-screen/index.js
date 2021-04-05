import React from 'react';
import { View, Text, Button } from 'react-native'; 
import { styles } from './styles';

export const GameOverScreen = ({ handlePlayAgain, userNumber, roundsToGuess }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Game Over!</Text>
            <Text>Your number was {userNumber}.</Text>
            <Text>The computer took {roundsToGuess} rounds to guess.</Text>
            <Button title="PLAY AGAIN" onPress={handlePlayAgain} />
        </View>
    );
}

