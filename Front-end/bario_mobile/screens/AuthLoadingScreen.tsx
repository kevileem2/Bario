import React from "react";
import { View, Text, Button } from "react-native";

/**
 * Check if the user is authenticated
 * Redirect the user to authentication screen if not
 */

export const AuthLoadingScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Auth loading</Text>
      <Button
        title="Skip auth loading screen"
        onPress={() => navigation.navigate("Auth")}
      />
    </View>
  );
};
