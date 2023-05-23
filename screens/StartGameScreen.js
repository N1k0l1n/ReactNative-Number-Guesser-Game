import { View, TextInput, StyleSheet, Alert } from "react-native";
import React, {useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";

function StartGameScreen({onPickNumber}) {

  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function resetInputHandler(){
    setEnteredNumber("")
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      //show alert
      Alert.alert(
        'Invalid number!!!', 
        'Number has to be between 1 - 99.',
        [{text:'Okey', style:'destructive', onPress: resetInputHandler }]
        );
      return ;
    }
      onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
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
          <PrimaryButton onPressed={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
