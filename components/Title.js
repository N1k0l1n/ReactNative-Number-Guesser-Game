import { Text, StyleSheet } from "react-native";
import React from "react";

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily:'open-sans-bold',
    fontSize: 24,
    color: 'black',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'black',
    padding: 12,
  },
});
