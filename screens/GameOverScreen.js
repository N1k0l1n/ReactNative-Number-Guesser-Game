import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/game-over.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.heighlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
      <Text style={styles.heighlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPressed={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary900,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: "#FFFFF0",
    textAlign: "center",
    marginBottom: 24,
  },
  heighlight: {
    fontFamily: "open-sans-bold",
    color: "red",
  },
});
