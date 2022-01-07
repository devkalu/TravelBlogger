import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: "67%", width: "55%" }}>
        <Image
          source={require("../../../assets/TravelBlogger.png")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <MaterialCommunityIcons
        name="weather-night"
        size={24}
        color="black"
        style={{ position: "absolute", right: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: sz5,
    flexDirection: "row",
    justifyContent: "center",
    height: "5%",
  },
});

export default Header;
