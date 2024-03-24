import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

const RowView = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 16,
            letterSpacing: 2,
            color: "#303030",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#303030" }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  const [showMore, setShowMore] = useState(false);

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
        {/* upper section  */}
        {!showMore && (
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 20, color: "#fff" }}>
                Sunshine is delicious, rain is refreshing, wind braces us up,
                snow is exhilarating; there is really no such thing as bad
                weather, only different kinds of good weather.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Ada Lavles
              </Text>
            </View>
            <Image
              source={require("./assets/refresh.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>
        )}

        {/* bottom part  */}
        <View style={{ marginTop: 36 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("./assets/sun.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "semibold",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              Good Morning
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text>
              <Text
                style={{
                  fontSize: 100,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                11:30
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: "#fff",
                }}
              >
                BST
              </Text>
            </Text>
          </View>

          <View style={{ marginTop: 16 }}>
            <Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#fff",
                  fontWeight: "bold",
                  letterSpacing: 3,
                }}
              >
                In London, UK
              </Text>
            </Text>
          </View>

          {/* button  */}
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              flexDirection: "row",
              height: 50,
              width: 180,
              backgroundColor: "#fff",
              borderRadius: 50,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 6,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              {showMore ? "LESS" : "MORE"}
            </Text>

            <Image
              source={
                showMore
                  ? require("./assets/up.png")
                  : require("./assets/down.png")
              }
              style={{ height: 50, width: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* expanded view  */}
      {showMore && (
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.8,
            paddingVertical: 48,
            paddingHorizontal: 26,
          }}
        >
          <RowView label={"current timezone"} value={"Europe / London"} />
          <RowView label={"day of the year"} value={"295"} />
          <RowView label={"day of the week"} value={"5"} />
          <RowView label={"week number"} value={"42"} />
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
