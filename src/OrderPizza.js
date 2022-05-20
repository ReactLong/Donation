import React, { useState, useRef } from 'react'

import { View, Text } from 'react-native'

import { Picker } from '@react-native-picker/picker'

const OrderPizza = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()

  const pickerRef = useRef()

  function open() {
    pickerRef.current.focus()
  }

  function close() {
    pickerRef.current.blur()
  }

  return (
    <Picker
      ref={pickerRef}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      <Picker.Item label="React" value="rc" />
      <Picker.Item label="Vue" value="vue" />
    </Picker>
  )
}

export default OrderPizza
