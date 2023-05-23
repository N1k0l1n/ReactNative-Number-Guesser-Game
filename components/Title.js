import { Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../utils/colors";

export default function Title({children}) {
  return <Text style={styles.title}>Opponent's Guess</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'black',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'black',
    padding: 12,
  },
});
