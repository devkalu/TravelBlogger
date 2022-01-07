import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog",
      headerShown: "none",
    },
  }
);

const App = createAppContainer(Navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
