// import PokiCard from "./components/PokiCard.js";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import PokiCard from "./components/PokiCard";

export default function App() {
  const chamanderData = {
    name: "Chamander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokiCard {...chamanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
