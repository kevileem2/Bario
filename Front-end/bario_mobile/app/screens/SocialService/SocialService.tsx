import React, { useState, useEffect } from "react"
import { View, ActivityIndicator } from "react-native"
import { Container, List, ListItem } from "./components"
import { Typography } from "../../theme"

import { api } from "../../config"
import NavigationHeader from "../../shared/navigationHeader/NavigationHeader"

export default ({ navigation }) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  useEffect(() => {
    fetchData(page)
  }, [])

  const fetchData = async (page?: number) => {
    try {
      let res = await fetch(`${api.baseUrl}socialServices?page=${page}`, {
        headers: {
          "content-type": "application/json",
          authorization:
            "Basic aGVrdG9yLm1pc3Bsb25AZ21haWwuY29tOnRlc3RpbmcxMjM="
        }
      })
      let json = await res.json()
      setData(() => [...data, ...json.data])
    } catch (err) {
      console.error(err)
      setError(true)
    }
    setLoading(false)
  }

  const loadMore = () => {
    setPage(page + 1)
    fetchData(page)
  }
  const handleNavigationPress = () => {
    navigation.navigate("Home")
  }

  const handleRightFlingGesture = () => {
    navigation.navigate("Profile", { screen: 2 })
  }

  return (
    <NavigationHeader
      handleNavigationPress={handleNavigationPress}
      title="Calender"
      renderBottomTabs
      onRightFlingGesture={handleRightFlingGesture}
    >
      <Container>
        <Typography.Title>Social Services</Typography.Title>
        {data.length > 0 && (
          <View style={{ flex: 1, backgroundColor: "#eee" }}>
            <Typography.Text style={{ position: "absolute" }}>
              {page}
            </Typography.Text>
            {isError && <Typography.Text>Something went wrong</Typography.Text>}
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <List
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <ListItem
                    style={{
                      backgroundColor:
                        item.id % 2 == 0 ? Colors.primary : Colors.darkPrimary
                    }}
                  >
                    <Typography.Subtitle color={"#fff"}>
                      {item.name}
                    </Typography.Subtitle>
                  </ListItem>
                )}
                onEndThreshold={7}
                onEndReached={loadMore}
              />
            )}
          </View>
        )}
      </Container>
    </NavigationHeader>
  )
}
