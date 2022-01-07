import { Dimensions, PixelRatio, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const size = width + height;

export const sz9 = size * 0.25;
export const sz8 = size * 0.1;
export const sz7 = size * 0.075;
export const sz6 = size * 0.05;
export const sz5 = size * 0.025;
export const sz4 = size * 0.01;
export const sz3 = size * 0.0075;
export const sz2 = size * 0.005;
export const sz1 = size * 0.0025;

const commonStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },

  h1: {
    fontSize: size * 0.04,
  },
  h2: {
    fontSize: size * 0.035,
  },
  h3: {
    fontSize: size * 0.03,
  },
  h4: {
    fontSize: size * 0.025,
  },
  h5: {
    fontSize: size * 0.02,
  },
  h6: {
    fontSize: size * 0.015,
  },
  h7: {
    fontSize: size * 0.01,
  },
  h8: {
    fontSize: size * 0.005,
  },
});

export default commonStyles;
