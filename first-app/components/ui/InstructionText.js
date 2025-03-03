import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
  },
});
