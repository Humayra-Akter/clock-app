import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <ImageBackground source={require("./assets/bg.jpg")} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={{ fontSize: 20, color: "#fff" }}>
              Sunshine is delicious, rain is refreshing, wind braces us up, snow
              is exhilarating; there is really no such thing as bad weather,
              only different kinds of good weather.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
