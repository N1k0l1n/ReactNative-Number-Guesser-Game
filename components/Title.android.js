import { Text, StyleSheet, Platform } from "react-native";
import React from "react";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    textAlign: "center",
    //borderWidth: Platform.OS === 'android' ? 2 : 0,
    //borderWidth: Platform.select({ios: 0, android: 2}),
    borderWidth: 2,
    borderColor: "black",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
