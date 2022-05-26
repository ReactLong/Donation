import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Header({ navigation }) {
  const [visible, setVisible] = React.useState(false)

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.heading}>Donation X.X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDialog}>
          <Entypo
            style={styles.paddingX16}
            name="dots-three-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View
        style={[{ display: visible ? 'block' : 'none' }, innerStyle.dialogMenu]}
      >
        <TouchableHighlight
          style={[style.paddingX16, style.paddingY16, style.borderBottom]}
          underlayColor="#ddd"
          onPress={hideDialog}
        >
          <Text>Settings</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.paddingX16, style.paddingY16, style.borderBottom]}
          underlayColor="#ddd"
          onPress={hideDialog}
        >
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[style.paddingX16, style.paddingY16, style.borderBottom]}
          underlayColor="#ddd"
          onPress={() => {
            navigation.navigate('Report')
            hideDialog()
          }}
        >
          <Text>Report</Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const innerStyle = StyleSheet.create({
  dialogMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    width: '30%',
    backgroundColor: '#fff',
  },
})
