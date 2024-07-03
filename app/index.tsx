import ButtonsField from "@/components/ButtonsField";
import InputField from "@/components/InputField";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const darkModeLinearColors = ["#B87D21", "#9D6917", "#7C510E"];
const ligthModeLinearColors = ["#DFA64E", "#BD9960", "#C09C63"];

export default function Index() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleModeHandler = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={isDarkMode ? darkModeLinearColors : ligthModeLinearColors}
        style={styles.inputContainer}
      >
        <InputField
          isDarkMode={isDarkMode}
          onToggleMode={toggleModeHandler}
          calculation="0"
        />
      </LinearGradient>
      <View style={styles.buttonsContainer}>
        <ButtonsField isDarkMode={isDarkMode} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 4,
  },
  buttonsContainer: {
    flex: 7,
  },
});
