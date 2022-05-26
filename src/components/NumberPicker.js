import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { Card } from 'react-native-paper'
import NumberPlease from 'react-native-number-please'

export default function NumberPicker({ setDonateAmount }) {
  const order = [{ id: 'number', min: 0, max: 100 }]

  const initialOrder = [{ id: 'number', value: 100 }]

  const [orderValues, setOrderValues] = React.useState(initialOrder)

  React.useEffect(() => {
    setDonateAmount(Number(initialOrder[0].value))
  }, [])
  return (
    <View style={styles.numberContainer}>
      <Card>
        <NumberPlease
          digits={order}
          values={orderValues}
          onChange={(nextValues) => {
            setDonateAmount(Number(nextValues[0].value))
            setOrderValues(nextValues)
          }}
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
