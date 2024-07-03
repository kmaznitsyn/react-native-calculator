import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ligthModeEqualBtnGradientColors = ["#DFA64E", "#C09C63", "transparent"];
const darkModeEqualBtnGradientColors = ["#BD9960", "black"];

const ButtonsField = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button
          buttonStyle={
            isDarkMode ? styles.buttonStyles : styles.buttonStylesLightMode
          }
          containerStyle={styles.buttonContainer}
          title="AC"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />

        <Button
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
          containerStyle={styles.buttonContainer}
          title="/"
          titleStyle={
            isDarkMode ? styles.titleStyles : styles.titleStylesLightMode
          }
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
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
          onPress={() => {}}
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
