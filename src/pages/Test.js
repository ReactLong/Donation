import React, { useState } from 'react'
import ScrollPicker from 'react-native-wheel-scrollview-picker'
import { View, Text } from 'react-native'
function Selector({ min = 0, max = 100, step = 25, setter }) {
  const [selectedIndex, setSelectedIndex] = useState(9)

  return (
    <ScrollPicker
      dataSource={[
        '992',
        '993',
        '994',
        '995',
        '996',
        '997',
        '998',
        '999',
        '1000',
        '0',
        '1',
        '2',
        '3',
        '4',
      ]}
      selectedIndex={9}
      renderItem={(data, index) => {
        return (
          <View>
            <Text>{data}</Text>
          </View>
        )
      }}
      onValueChange={(data, selectedIndex) => setter(Number(data))}
      wrapperHeight={180}
      wrapperWidth={150}
      wrapperColor="#FFFFFF"
      itemHeight={60}
      highlightColor="black"
      highlightBorderWidth={2}
      itemTextStyle={{ color: 'black' }}
    />
  )
}

export default Selector
