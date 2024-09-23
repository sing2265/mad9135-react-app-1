import { Text, FlatList, View, Pressable, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    title: "A New Hope",
  },
  {
    title: "The Empire Strikes Back",
  },
  {
    title: "Return of the Jedi",
  },
  {
    title: "The Phantom Menace",
  },
];

const Item = ({ item }) => (
  <Pressable onPress={() => console.log("Pressed")}>
    <Text style={{ fontSize: 20, marginBottom: 10 }}>{item.title}</Text>
  </Pressable>
);

export default function MovieListScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
        }}
      >
        <Text style={{ marginBottom: 20 }}>Below Items are Pressable:</Text>
        <FlatList data={DATA} renderItem={Item}></FlatList>
        <Button
          title="Home"
          color="green"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Movie Details"
          color="green"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </SafeAreaView>
  );
}
