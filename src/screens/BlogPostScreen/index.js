import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import BlogContext from "../../context/BlogContext";

const BlogPostScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogPostScreen;
