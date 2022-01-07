import React, { useContext } from "react";
import { Text, StyleSheet, Button, FlatList, View } from "react-native";

//internal imports
import BlogContext from "../../context/BlogContext";
import commonStyles from "../../commonStyles";
import {
  sz1,
  sz2,
  sz3,
  sz4,
  sz5,
  sz6,
  sz7,
  sz8,
  sz9,
} from "../../commonStyles";
import HomeMenuBar from "../../components/HomeMenuBar";
import ImagePost from "../../components/ImagePost";

const HomeScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  const { h1, h2, h3, h4, h5, h6 } = commonStyles;

  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={addBlogPost} />
      <Text style={[h1]}>Home</Text>
      <ImagePost />
      <HomeMenuBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: sz5,
  },
});

export default HomeScreen;
