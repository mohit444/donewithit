import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for sale!"
        subtitle="$100"
      />
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subtitle="5 Listings"
      />
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.medium,
  },
});
