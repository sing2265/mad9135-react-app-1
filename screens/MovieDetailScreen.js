import { Text, ScrollView, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetailScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 18 }}>
          Title of the Movie
        </Text>
        <Image
          source={require("../assets/sample.jpg")}
          style={{ width: "100%", marginTop: 20 }}
        ></Image>
        <Button
          title="Home"
          color="green"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Movies List"
          color="green"
          onPress={() => navigation.navigate("Movies")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
