import ButtonsField from "@/components/ButtonsField";
import InputField from "@/components/InputField";
import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { performCalculation } from "@/utils/math";

const darkModeLinearColors = ["#B87D21", "#9D6917", "#7C510E"];
const ligthModeLinearColors = ["#DFA64E", "#BD9960", "#C09C63"];

export default function Index() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("");
  const [operand, setOperand] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const calculation =
    firstNumber +
    (!operand ? "" : operand) +
    (!secondNumber ? "" : secondNumber);

  const clearHandler = () => {
    setFirstNumber("0");
    setOperand("");
    setSecondNumber("");
  };

  const opositeSignHandler = () => {
    if (operand) {
      setSecondNumber((prevState) =>
        prevState.includes("-") ? prevState.slice(1) : "-" + prevState
      );
    } else {
      setFirstNumber((prevState) =>
        prevState.includes("-") ? prevState.slice(1) : "-" + prevState
      );
    }
  };

  const divideHandler = () => {
    setOperand("/");
  };

  const multiplyHandler = () => {
    setOperand("*");
  };

  const minusHanlder = () => {
    setOperand("-");
  };

  const plusHandler = () => {
    setOperand("+");
  };

  const equalsHandler = () => {
    // parse and perform calculations
    const firstDigit = parseFloat(firstNumber);
    const secondDigit = parseFloat(secondNumber);

    if (!secondDigit && secondDigit !== 0) {
      console.log(secondDigit);
      setFirstNumber(firstDigit.toString());
      return;
    }

    try {
      const calculatedValue = performCalculation(
        operand,
        firstDigit,
        secondDigit
      );
      setFirstNumber(calculatedValue.toString());
    } catch (e) {
      Alert.alert(
        "Could not perform calculation!",
        "Unsupported math expression =("
      );
      setFirstNumber("0");
    }

    setOperand("");
    setSecondNumber("");
  };

  const digitHandler = (digit: string) => {
    if (operand) {
      setSecondNumber((prevState) =>
        prevState === "0" ? digit : prevState + digit
      );
    } else {
      setFirstNumber((prevState) =>
        prevState === "0" ? digit : prevState + digit
      );
    }
  };

  const percentHandler = () => {};

  const pointHandler = () => {
    if (operand) {
      setSecondNumber((prevState) =>
        prevState.includes(".") ? prevState : prevState + "."
      );
    } else {
      setFirstNumber((prevState) =>
        prevState.includes(".") ? prevState : prevState + "."
      );
    }
  };

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
          calculation={calculation}
        />
      </LinearGradient>
      <View style={styles.buttonsContainer}>
        <ButtonsField
          onClear={clearHandler}
          onDigit={digitHandler}
          onDivide={divideHandler}
          onEquals={equalsHandler}
          onMinus={minusHanlder}
          onMultiply={multiplyHandler}
          onPercent={percentHandler}
          onPlus={plusHandler}
          onPoint={pointHandler}
          onOppositeSign={opositeSignHandler}
          isDarkMode={isDarkMode}
        />
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
