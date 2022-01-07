import React, { useContext } from "react";
import { View, Text } from "react-native";

import BlogContext from "../../context/BlogContext";

const EditPostScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Edit Post Screen</Text>
    </View>
  );
};

export default EditPostScreen;
