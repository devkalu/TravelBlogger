import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import BlogContext from "../../context/BlogContext";

const BookmarksScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Bookmarks Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookmarksScreen;
