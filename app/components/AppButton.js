import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const AppButton = ({ title, onPress, bgColor = "primary" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[bgColor] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
