import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Report({ navigation }) {
  return (
    <>
      <View>
        <Text>Report</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  )
}
