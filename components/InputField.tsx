import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useState } from "react";

const InputField = ({
  calculation,
  isDarkMode,
  onToggleMode,
}: {
  calculation: string;
  isDarkMode: boolean;
  onToggleMode: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Switch
        onValueChange={onToggleMode}
        value={isDarkMode}
        trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "darkslategrey" : "white"}
        style={styles.switch}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.text}>{calculation}</Text>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switch: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    marginTop: 20,
    borderColor: "white",
    borderWidth: 3,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    paddingRight: 9,
    paddingBottom: 2,
  },
});
