import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { sz1, sz3, sz4, sz5, sz6, sz7, sz8 } from "../../commonStyles";
import commonStyles from "../../commonStyles";

const PostListDetail = () => {
  const { h4, h5, h6, h7 } = commonStyles;
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ height: sz8, width: sz8, marginRight: sz3 }}>
        <Image
          source={require("../../../assets/annie-spratt-qyAka7W5uMY-unsplash.jpg")}
          style={{ height: "100%", width: "100%", borderRadius: sz4 }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={[
            h7,
            {
              fontWeight: "700",
              color: "#8e9398",
              textTransform: "uppercase",
              marginBottom: sz3,
            },
          ]}
        >
          TECHNOLOGY
        </Text>
        <Text
          style={[h6, { fontWeight: "800", marginRight: sz4 }]}
          numberOfLines={4}
        >
          Microsoft launches a deepfake detector tool ahead of US election.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PostListDetail;
