import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="register" bgColor="secondary" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  logo: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    textTransform: "capitalize",
    paddingVertical: 20,
  },
});
