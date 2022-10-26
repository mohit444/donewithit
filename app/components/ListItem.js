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

const ListItem = ({ image, title, subtitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
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
  subtitle: { color: colors.gray, fontSize: 16 },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 3,
  },
});
