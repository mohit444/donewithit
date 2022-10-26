import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const Card = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 7,
  },
});
