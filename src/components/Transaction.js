import { FontAwesome } from '@expo/vector-icons'

import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

import Hr from './Hr'

export default function Transaction({ navigation, handleRerender, item }) {
  function handleDelete() {
    fetch(
      `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction/${item.id}`,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.json())
      .then((data) => handleRerender())
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
          <FontAwesome name="times" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <Hr></Hr>
    </>
  )
}
