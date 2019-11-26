import React from "react";
import { Text as RNText, Platform } from "react-native";

interface TextProps {
  type: string,
  style?: React.CSSProperties,
  children?: React.ReactNode
}

const getStyle = type => {
  const style = {
    text: {
      fontFamily: "Inter",
      fontSize: 12,
      marginBottom: 16
    },
    largeText: {
      fontFamily: 'Inter',
      fontSize: 16,
      marginBottom: 20
    },
    subTitle: {
      fontFamily: "InterBold",
      fontSize: 16,
      marginBottom: 20
    },
    title: {
      fontFamily: "InterBold",
      fontSize: 24,
      marginBottom: 32
    }
  };
  switch (type) {
    case "text":
      return style.text;
    case 'largeText':
      return style.largeText
    case "subtitle":
      return style.subTitle;
    case "title":
      return style.title;
  }
};

export default ({ style, type = 'text', children, ...props }) => (
  <RNText {...props} style={[getStyle(type), style]}>
    {children}
  </RNText>
);

