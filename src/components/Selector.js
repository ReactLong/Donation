import React, { useState, useEffect } from 'react'

import { View, Text } from 'react-native'

import { Picker } from '@react-native-picker/picker'
import style from '../../assets/css/style.css'

const Selector = ({ min = 0, max = 100, step = 25, setter }) => {
  const [selected, setSelected] = useState()
  const [values, setValues] = useState([])

  // init
  useEffect(() => {
    let temp = []
    for (let i = min; i <= max; i += step) {
      temp.push(i)
    }
    setSelected(max)
    setValues((value) => [...temp])
  }, [])

  // handle side effect
  useEffect(() => {
    setter(Number(selected))
  }, [selected])

  return (
    <Picker
      selectedValue={selected}
      onValueChange={(itemValue) => setSelected(itemValue)}
      style={style.donateBtn}
    >
      {values.map((value, index) => (
        <Picker.Item label={value} value={value} key={index} />
      ))}
    </Picker>
  )
}

export default Selector
