import React from "react";
import { View, Text, StyleSheet } from "react-native";

//internal imports
import PostListDetail from "../PostListDetail/Index";
import { sz5, sz3 } from "../../commonStyles";
import commonStyles from "../../commonStyles";

const PostList = () => {
  const { h7 } = commonStyles;
  return (
    <View style={styles.container}>
      <Text style={[h7, styles.titleStyle]}>Latest Posts</Text>
      <PostListDetail />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: sz5,
  },
  titleStyle: {
    marginVertical: sz3,
    textTransform: "uppercase",
    color: "#8e9398",
  },
});

export default PostList;
