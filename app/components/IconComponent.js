import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const IconComponent = ({
  name,
  iconcolor = colors.white,
  size = 40,
  backgroundColor = colors.black,
}) => {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconcolor} size={size * 0.5} />
    </View>
  );
};

export default IconComponent;

const styles = StyleSheet.create();
