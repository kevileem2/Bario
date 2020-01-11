import React, { useState } from "react"
import Realm from "realm"
import { View, Text, Button } from "react-native"
import NavigationHeader from "../../shared/navigationHeader/NavigationHeader"
import { NavigationStackScreenProps } from "react-navigation-stack"
import { WithStorageInjectedProps } from "../../utils/dataUtils"
import storage, { Event } from "../../shared/storage"

/**
 * Event Screen
 */

interface Props extends NavigationStackScreenProps, WithStorageInjectedProps {
  realm: Realm
  event: Event[]
}

export default ({ realm, navigation }: Props) => {
  const handleNavigationPress = () => {
    navigation.navigate("Home")
  }

  const handleLeftFlingGesture = () => {
    navigation.navigate("Calender", { screen: 1 })
  }

  const addEventToRealmDatabase = () => {
    storage.writeTransaction(
      realmInstance =>
        realmInstance.create(
          Event,
          {
            guid: "1",
            name: "Bario's after exams new years Party",
            location: "Artevelde",
            description: "Alleen als we erdoor zijn"
          },
          Realm.UpdateMode.All
        ),
      realm
    )
  }

  return (
    <NavigationHeader
      handleNavigationPress={handleNavigationPress}
      title="Events"
      renderBottomTabs
      onLeftFlingGesture={handleLeftFlingGesture}
    >
      <View>
        <Text>yeet</Text>
        <Button
          title="add event to realm database!"
          onPress={addEventToRealmDatabase}
        />
      </View>
    </NavigationHeader>
  )
}
