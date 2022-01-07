import React from "react";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import { sz1, sz7, sz5, sz4, sz2, sz3, sz8, sz9 } from "../../commonStyles";
import commonStyles from "../../commonStyles";

const ImagePost = () => {
  const { ht5, wt8, h4, h5, h7, h3, h6 } = commonStyles;

  return (
    <View style={{ height: "40%", width: "80%" }}>
      <ImageBackground
        source={require("../../../assets/annie-spratt-qyAka7W5uMY-unsplash.jpg")}
        style={{ flex: 1, width: "100%" }}
        resizeMode="cover"
        imageStyle={{ borderRadius: sz3 }}
      >
        <LinearGradient
          colors={["#000", "transparent"]}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.8,
            borderRadius: sz3,
          }}
          start={[0.4, 1]}
          end={[0.4, 0.1]}
          locations={[0.1, 0.4]}
        >
          <View style={styles.categoryStyle}>
            <Text style={[styles.categoryTextStyle, h7]}>Outdoors</Text>
          </View>
          <View style={styles.captionStyle}>
            <Text style={[styles.captionTextStyle, h6]} numberOfLines={3}>
              Microsoft launches a deepfake detector tool ahead of US election.
            </Text>
          </View>
          <View
            style={{
              zIndex: 30,
              alignItems: "flex-end",
              bottom: sz4,
              marginHorizontal: sz4,
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="commenting-o"
                size={24}
                color="white"
                style={{ marginRight: sz5 }}
              />
              <FontAwesome name="bookmark-o" size={24} color="white" />
            </View>
            <View>
              <FontAwesome name="share" size={24} color="white" />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageStyle: {
    borderRadius: sz4,
    height: "40%",
    width: "80%",
  },
  categoryTextStyle: {
    zIndex: 1,
    color: "#fff",
    fontWeight: "600",
    textTransform: "uppercase",
    zIndex: 10,
  },
  categoryStyle: {
    backgroundColor: "#141e28",
    zIndex: 1,
    position: "absolute",
    paddingHorizontal: sz2,
    paddingVertical: sz2,
  },
  captionTextStyle: {
    fontWeight: "700",
    color: "white",
    zIndex: 2,
    width: "90%",

    left: sz4,
  },
  captionStyle: {
    backgroundColor: "#141e28",

    width: "80%",
    height: "35%",
    top: sz7,
    justifyContent: "center",
  },
});

export default ImagePost;
