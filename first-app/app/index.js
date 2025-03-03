import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import GameStartScreen from "../screens/GameStartScreen";
import GameScreen from "../screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "../constants/colors";
import GameOverScreen from "../screens/GameOverScreen";

export default function Page() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootSceen}
    >
      <ImageBackground
        source={require("../assets/background/building.jpg")}
        resizeMode='cover'
        style={styles.rootSceen}
        imageStyle={styles.imageContainer}
      >
        <SafeAreaView style={styles.rootSceen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootSceen: {
    flex: 1,
  },

  imageContainer: {
    opacity: 0.15,
  },
});
