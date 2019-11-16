//React imports
import React from "react"
import BackgroundImage from "./shared/backgroundImage/BackgroundImage"

import AppNavigator from "../navigation/AppNavigator";

/**
 * @class Main
 * Root of App, this is used to not directly edit the 'App.js' file in the root folder
 */
export default () => {
<<<<<<< Updated upstream
  return (
    <BackgroundImage
      source={require("./assets/belfort-background.jpg")}
    ></BackgroundImage>
  )
}
=======
  const [isLoading, setLoading] = useState(true);
  const _loadResourcesAsync = async () => {
    await Promise.all([
      Font.loadAsync({
        Inter: require("../assets/fonts/Inter-Regular.ttf"),
        InterBold: require("../assets/fonts/Inter-Bold.ttf")
      })
    ]);
  };

  if (isLoading) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onFinish={() => setLoading(false)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <AppNavigator />
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
>>>>>>> Stashed changes
