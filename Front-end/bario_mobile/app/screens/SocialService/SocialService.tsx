import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, StyleSheet, FlatList, Platform, ActivityIndicator } from 'react-native'
import { Container, List, ListItem } from "./components"
import { Title, Subtitle, Text } from '_theme/typography'
import { Colors } from '_theme'

import { api } from '../../config'

export default ({ navigation }) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false)
  useEffect(() => {
    fetchData(page)
  }, [])

  const fetchData = async (page?: number) => {
    try {
      let res = await fetch(`${api.baseUrl}socialServices?page=${page}`, {
        "headers": {
          "content-type": "application/json",
          "authorization": "Basic aGVrdG9yLm1pc3Bsb25AZ21haWwuY29tOnRlc3RpbmcxMjM="
        },
      });
      let json = await res.json()
      setData(() => [...data, ...json.data])
    } catch (err) {
      console.error(err)
      setError(true)
    }
    setLoading(false);
  }

  const loadMore = () => {
    setPage(page + 1)
    fetchData(page)
  };

  return (
    <Container>
      <Title>Social Services</Title>
      {data.length > 0 &&
        <View style={{ flex: 1, backgroundColor: '#eee' }}>
          <Text style={{ position: 'absolute' }}>{page}</Text>
          {isError && <Text>Something went wrong</Text>}
          {isLoading ? <ActivityIndicator /> : (
            <List
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ListItem
                  style={{
                    backgroundColor: item.id % 2 == 0 ?
                      Colors.primary :
                      Colors.darkPrimary
                  }}>
                  <Subtitle color={"#fff"}>{item.name}</Subtitle>
                </ListItem>
              )}
              onEndThreshold={7}
              onEndReached={loadMore}
            />
          )}
        </View>
      }
    </Container>
  )
}
