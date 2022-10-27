import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in good condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(index) => index.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            subtitle={"$" + item.price}
            image={item.image}
          />
          // charAt - To get the first letter and slice - To get the rest of string
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
