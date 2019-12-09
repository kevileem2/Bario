import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, StyleSheet, FlatList, Platform, ActivityIndicator } from 'react-native'
import { Container } from "./components"
import json from './data.json'
import { Title, Subtitle, Text } from '_theme/typography'

export default ({ navigation }) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // let data = await (await fetch('./data')).json();
        setData(json.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    fetchData()
  }, [])

  return (
    <Container>
      <Title>Social Services</Title>
      <Text>{json.current_page}</Text>
      {isError && <Text>Something went wrong</Text>}
      {isLoading ? <ActivityIndicator /> : (
        <FlatList data={data} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
          <View key={item.id}>
            <Subtitle>{item.name}</Subtitle>
          </View>
        )} />
      )}
    </Container>
  )
}
