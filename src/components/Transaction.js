import { FontAwesome } from '@expo/vector-icons'

import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

import Hr from './Hr'

export default function Transaction({ navigation, item }) {
  return (
    <>
      <View
        style={[styles.flexRow, styles.paddingY4, styles.justifyContentAround]}
      >
        <Text>{item.id}</Text>
        <Text>{item.amount}</Text>
        <Text>{item.method ? 'Paypal' : 'Direct'}</Text>
        <TouchableOpacity>
          <FontAwesome name="times" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <Hr></Hr>
    </>
  )
}
