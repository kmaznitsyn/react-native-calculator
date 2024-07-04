import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ligthModeEqualBtnGradientColors = ["#DFA64E", "#C09C63", "transparent"];
const darkModeEqualBtnGradientColors = ["#BD9960", "black"];

const ButtonsField = ({
  isDarkMode,
  onDigit,
  onPlus,
  onDivide,
  onMinus,
  onMultiply,
  onEquals,
  onClear,
  onPercent,
  onPoint,
  onOppositeSign,
}: {
  isDarkMode: boolean;
  onDigit: (digit: string) => void;
  onPlus: () => void;
  onDivide: () => void;
  onMinus: () => void;
  onMultiply: () => void;
  onEquals: () => void;
  onClear: () => void;
  onPercent: () => void;
  onPoint: () => void;
  onOppositeSign: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          onPress={onClear}
          containerStyle={styles.buttonContainer}
          title="AC"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />

        <Button
          onPress={onOppositeSign}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="+-"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={onPercent}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="%"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          onPress={onDivide}
          containerStyle={styles.buttonContainer}
          title="/"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          onPress={() => onDigit("7")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="7"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={() => onDigit("8")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="8"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={() => onDigit("9")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="9"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={onMultiply}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="X"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          onPress={() => onDigit("4")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="4"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={() => onDigit("5")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="5"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={() => onDigit("6")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="6"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={onMinus}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="-"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          onPress={() => onDigit("1")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="1"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={() => onDigit("2")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="2"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={() => onDigit("3")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="3"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={onPlus}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="+"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          onPress={() => onDigit("0")}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={[styles.buttonContainer, { width: "50%" }]}
          title="0"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
        <Button
          onPress={onPoint}
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="."
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />

        <Button
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: isDarkMode
              ? darkModeEqualBtnGradientColors
              : ligthModeEqualBtnGradientColors,
          }}
          onPress={onEquals}
        >
          =
        </Button>
      </View>
    </View>
  );
};

export default ButtonsField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: "25%",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonStyles: {
    height: "100%",
    backgroundColor: "#62410F",
  },
  buttonStylesLightMode: {
    height: "100%",
    backgroundColor: "white",
  },
  titleStyles: {
    fontSize: 32,
    color: "white",
  },
  titleStylesLightMode: {
    fontSize: 32,
    color: "black",
  },
  buttonRow: {
    flexDirection: "row",
    flex: 1,
  },
});
