//React imports
import React from "react"
import BackgroundImage from "./shared/backgroundImage/BackgroundImage"

/**
 * @class Main
 * Root of App, this is used to not directly edit the 'App.js' file in the root folder
 */
export default () => {
  return (
    <BackgroundImage
      source={require("./assets/belfort-background.jpg")}
    ></BackgroundImage>
  )
}
