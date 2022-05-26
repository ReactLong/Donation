import { FontAwesome } from '@expo/vector-icons'

import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

import Hr from './Hr'

export default function Transaction({ navigation, handleRerender, item }) {
  const [isLoading, setLoading] = useState(false)

  function handleDelete() {
    setLoading(true)
    fetch(
      `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction/${item.id}`,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        handleRerender()
      })
  }
  return (
    <>
      <View
        style={[styles.flexRow, styles.paddingY4, styles.justifyContentAround]}
      >
        <Text>{item.id}</Text>
        <Text>{item.amount}</Text>
        <Text>{item.method ? 'Paypal' : 'Direct'}</Text>
        <TouchableOpacity onPress={() => handleDelete()}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#27ae60" />
          ) : (
            <FontAwesome name="times" size={24} color="red" />
          )}
        </TouchableOpacity>
      </View>
      <Hr></Hr>
    </>
  )
}
