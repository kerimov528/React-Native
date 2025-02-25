import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // Only for android shadow
    // for ios shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },

  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
