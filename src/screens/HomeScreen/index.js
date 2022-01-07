import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Button,
  FlatList,
  View,
  SafeAreaView,
} from "react-native";

//internal imports
import BlogContext from "../../context/BlogContext";
import commonStyles, { sz4, sz6 } from "../../commonStyles";
import { sz5 } from "../../commonStyles";

//components
import HomeMenuBar from "../../components/HomeMenuBar";
import ImagePost from "../../components/ImagePost";
import PostList from "../../components/PostList";
import Header from "../../components/Header";

const HomeScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ImagePost />
        <HomeMenuBar />
        <PostList />
      </SafeAreaView>
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
