import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from "./components/header";
import { GameScreen } from './screens/game-screen';
import { StartGameScreen } from './screens/start-game-screen';

export default function App() {
  const[userNumber, setUserNumber ] = useState(false);

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {!userNumber && <StartGameScreen  handleStartGame={handleStartGame} />}
      {userNumber && <GameScreen userChoice={userNumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
