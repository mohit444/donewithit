import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Messages from "./app/screens/Messages";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <Messages />;
}

const styles = StyleSheet.create({
  container: {},
});
