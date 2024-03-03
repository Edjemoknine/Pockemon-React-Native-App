import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokiCard from "./components/PokiCard";
import { data } from "./data";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {data.map((pokemon) => (
          <PokiCard key={pokemon.name} {...pokemon} />
        ))}
      </ScrollView>
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
