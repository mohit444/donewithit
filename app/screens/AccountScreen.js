import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "my listings",
    icon: "format-list-bulleted",
    iconBgColor: colors.primary,
  },
  {
    title: "my messages",
    icon: "email",
    iconBgColor: colors.secondary,
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mohit Sharma"
          subtitle="React Native Developer"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(index) => index.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              icon={item.icon}
              iconBgColor={item.iconBgColor}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <ListItem title="log out" icon="logout" iconBgColor={colors.yellow} />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
