import React from "react";
import { Text as RNText, Platform } from "react-native";

export default ({ style, children, ...rest }) => (
  <RNText {...rest} style={[{ fontFamily: "Inter" }, style]}>
    {children}
  </RNText>
);
