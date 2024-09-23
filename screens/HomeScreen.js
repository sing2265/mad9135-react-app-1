import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 8 }}>
          Basic React Native App
        </Text>
        <Button
          title="Movie Details"
          color="green"
          onPress={() => navigation.navigate("Details")}
        />
        <Button
          title="Movies List"
          color="green"
          onPress={() => navigation.navigate("Movies")}
        />
      </View>
    </SafeAreaView>
  );
}
