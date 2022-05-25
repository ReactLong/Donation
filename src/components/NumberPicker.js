import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { Card } from 'react-native-paper'
import NumberPlease from 'react-native-number-please'

export default function NumberPicker() {
  const order = [{ id: 'number', min: 0, max: 99 }]

  const initialOrder = [{ id: 'number', value: 99 }]

  const [orderValues, setOrderValues] = React.useState(initialOrder)

  return (
    <View style={styles.numberContainer}>
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
  numberContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  numberParagraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
