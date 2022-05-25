import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

// You can import from local files

import { Card } from 'react-native-paper'
import NumberPlease from 'react-native-number-please'

export default function App() {
  const order = [
    { id: 'pizza', label: '🍕', min: 0, max: 99 },
    { id: 'slurp', label: '🥤', min: 0, max: 99 },
  ]

  const initialOrder = [
    { id: 'pizza', value: 99 },
    { id: 'slurp', value: 99 },
  ]

  const [orderValues, setOrderValues] = React.useState(initialOrder)

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Number Please</Text>
      <Card>
        <NumberPlease
          digits={order}
          values={orderValues}
          onChange={(nextValues) => setOrderValues(nextValues)}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
