import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  tinyMargin: '4px',
  smallMargin: '8px',
  baseMargin: '16px',
  halfLargeMargin: '12px',
  largeMargin: '24px',
  doubleLargeMargin: '48px',
  roundness: '4px',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight || 24
};

export default metrics;
