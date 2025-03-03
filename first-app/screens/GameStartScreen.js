import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function GameStartScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handelEnteredNumber = (newNumber) => {
    setEnteredNumber(newNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputOnPress = () => {
    const selectedNumber = parseInt(enteredNumber);

    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
      Alert.alert("Invalid Number!", "Number must be between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);

      return;
    }

    onPickNumber(selectedNumber);
  };

  return (
    <View style={""}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={handelEnteredNumber}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonBox}>
            <PrimaryButton onPress={resetInputHandler}>
              Reset Button
            </PrimaryButton>
          </View>
          <View style={styles.buttonBox}>
            <PrimaryButton onPress={confirmInputOnPress}>
              Confirm Button
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },

  numberInput: {
    width: 60,
    height: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  buttonBox: {
    flex: 1,
  },
});
