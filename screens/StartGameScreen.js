import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor : '#72063c',
    borderRadius : 8,
    elevation: 4
  },
});
