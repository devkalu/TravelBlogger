import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { sz6, sz5, sz3, sz4 } from "../../commonStyles";

const HomeMenuBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="ios-home-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="ios-search" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons name="ios-bookmarks-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="settings-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "7%",
    width: "80%",
    bottom: sz5,
    alignSelf: "center",
    borderRadius: sz6,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: sz5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    position: "absolute",
    alignItems: "center",
    zIndex: 1,
  },
});

export default HomeMenuBar;
