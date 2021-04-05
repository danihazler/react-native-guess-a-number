import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from "./components/header";
import { StartGameScreen } from './screens/start-game-screen';
import { GameScreen } from './screens/game-screen';
import { GameOverScreen } from './screens/game-over-screen';

export default function App() {
  const[userNumber, setUserNumber] = useState(false);
  const[roundsToGuess, setRoundsToGuess] = useState(0);
  const[isTheGameOver, setIsTheGameOver] = useState(false);

  const handlePlayAgain = () => {
    setRoundsToGuess(0);
    setUserNumber(false);
    setIsTheGameOver(false);
  }

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleGameOver = (numOfRounds) => {
    setRoundsToGuess(numOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {(!userNumber && !isTheGameOver) && (
        <StartGameScreen  
          handleStartGame={handleStartGame} 
        />
      )}
      {(userNumber && !isTheGameOver) && (
        <GameScreen 
          userChoice={userNumber} 
          setIsTheGameOver={setIsTheGameOver}
          handleGameOver={handleGameOver}
        />
      )}
      {isTheGameOver && (
        <GameOverScreen 
          setIsTheGameOver={setIsTheGameOver} 
          handlePlayAgain={handlePlayAgain}
          userNumber={userNumber}
          roundsToGuess={roundsToGuess}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
