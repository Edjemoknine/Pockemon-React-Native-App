import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  FlatList,
  Text,
  View,
  SectionList,
} from "react-native";
import PokiCard from "./components/PokiCard";
import { data } from "./data";
import dataGroup from "./data_group.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => {
          return <PokiCard key={item.name} {...item} />;
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={<View style={{ height: 16 }} />} //foraddmrgingYbetweenComponents
        ListEmptyComponent={<Text style={styles.empty}>No items found</Text>}
        ListHeaderComponent={
          <Text style={styles.headerListText}>Pokemon List</Text>
        }
        ListFooterComponent={
          <Text style={styles.footerListText}>End Of Pokemon List</Text>
        }
      /> */}
      <View>
        <SectionList
          sections={dataGroup}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.HeaderSectionText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    margin: 16,
  },
  // FlatList
  empty: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 32,
  },
  headerListText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerListText: {
    marginTop: 12,
    fontSize: 24,
    textAlign: "center",
  },

  // SectionList
  card: {
    padding: 16,
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 10,
  },
  cardText: {
    textAlign: "center",
    fontSize: 18,
  },
  HeaderSectionText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
