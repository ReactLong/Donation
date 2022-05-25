import React, { useState, useRef } from 'react'

import { View, Text } from 'react-native'

import { Picker } from '@react-native-picker/picker'

const Select = () => {
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
    </Picker>
  )
}

export default Select
