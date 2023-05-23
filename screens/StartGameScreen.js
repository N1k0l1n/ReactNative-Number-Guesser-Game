import { View, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert("Invalid number!!!", "Number has to be between 1 - 99.", [
        { text: "Okey", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
        <Card>
       <InstructionText>
        Enter a Number
       </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressed={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
        </Card>
      </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    marginTop: 100,
    alignItems:'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
