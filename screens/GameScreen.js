import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    //Direction => 'lower', 'greater'

    if(
      (direction === 'lower' && currentGuess < userNumber) || 
      (direction === 'greater' && currentGuess > userNumber)
      ){
        Alert.alert(
          "Don't lie!", 
          'You know that this is worng...',
          [{text: 'Sorry', style: 'cancel'}]
           );
        return;
      }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
      const newRndNumber = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <View>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower' )}>-</PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
