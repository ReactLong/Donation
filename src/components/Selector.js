import React, { useState, useEffect } from 'react'
import ScrollPicker from 'react-native-wheel-scrollview-picker'
import { View, Text } from 'react-native'
function Selector({ min = 0, max = 100, step = 25, setter }) {
  const [values, setValues] = useState([])

  // init
  useEffect(() => {
    let temp = []
    for (let i = min; i <= 100; i += step) {
      temp.unshift(max - i)
      temp.push(i)
    }
    setValues((value) => [...temp])
    setter(max)
  }, [])

  return (
    <ScrollPicker
      dataSource={values}
      renderItem={(data) => {
        return (
          <View>
            <Text>{data}</Text>
          </View>
        )
      }}
      selectedIndex={100}
      onValueChange={(data) => {
        console.log(data)
        setter(Number(data))
      }}
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
