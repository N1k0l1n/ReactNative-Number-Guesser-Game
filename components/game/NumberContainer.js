import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "black",
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 36,
  },
});
