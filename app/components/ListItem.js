import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";
import IconComponent from "./IconComponent";

const ListItem = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  icon,
  iconSize,
  iconColor,
  iconBgColor,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image source={image} style={styles.image} />}
          {icon && (
            <IconComponent
              name={icon}
              size={iconSize}
              backgroundColor={iconBgColor}
              color={iconColor}
            />
          )}
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: { color: colors.gray, fontSize: 15, textTransform: "capitalize" },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 3,
    textTransform: "capitalize",
  },
});
