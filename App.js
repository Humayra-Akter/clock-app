import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
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
            fontSize: 10,
            letterSpacing: 2,
            color: "#303030",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 700, color: "#303030" }}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <ImageBackground source={require("./assets/bg.png")} style={{ flex: 1 }}>
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
              <Text style={{ fontSize: 12, color: "#000", fontWeight: 400 }}>
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#000",
                  fontWeight: 800,
                  marginTop: 8,
                  letterSpacing: 1,
                }}
              >
                Ada Lovelace
              </Text>
            </View>
            <Image
              source={require("./assets/refresh.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>
        )}

        {/* bottom part  */}
        <View style={{ marginTop: 36 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: 400,
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
                  fontWeight: 700,
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
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: 700,
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
              height: 39,
              width: 115,
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
                fontSize: 12,
                color: "#000",
                letterSpacing: 3.75,
                fontWeight: 700,
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
            height: 256,
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
