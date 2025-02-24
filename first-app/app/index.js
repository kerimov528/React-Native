import { ImageBackground, StyleSheet, View } from "react-native";
import GameStartScreen from "../screens/GameStartScreen";
import GameScreen from "../screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function Page() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootSceen}>
      <ImageBackground
        source={require("../assets/background/building.jpg")}
        resizeMode='cover'
        style={styles.rootSceen}
        imageStyle={styles.imageContainer}
      >
        {screen}
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
