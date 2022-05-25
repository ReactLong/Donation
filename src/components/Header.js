import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Header({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.heading}>Donation 1.5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Report')}>
          <Entypo
            style={styles.paddingX16}
            name="dots-three-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </>
  )
}
