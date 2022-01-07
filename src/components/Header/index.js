import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  sz1,
  sz6,
  sz7,
  sz8,
  sz9,
  sz2,
  sz5,
  sz3,
  sz4,
} from "../../commonStyles";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "55%",
          width: "40%",
          position: "absolute",
        }}
      >
        <Image
          source={require("../../../assets/TravelBlogger.png")}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>
      <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}>
        <MaterialCommunityIcons
          name="weather-night"
          size={sz5}
          color="black"
          style={{ position: "absolute", right: 0 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: sz5,
    flexDirection: "row",
    height: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
