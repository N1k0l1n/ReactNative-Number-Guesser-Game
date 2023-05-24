import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "black",
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontWeight: "bold",
    color: "black",
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
