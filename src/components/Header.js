import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { Entypo } from '@expo/vector-icons'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Header({ navigation, handleRerender }) {
  const [visible, setVisible] = React.useState(false)
  const [isLoading, setLoading] = useState(false)

  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  // handle reset
  const handleReset = async () => {
    setLoading(true)
    const res = await fetch(
      'https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction'
    )
    const transactions = await res.json()

    // delete all
    let count = transactions.length
    if (count == 0) {
      setLoading(false)
      hideDialog()
      return
    }
    transactions.forEach(async (transaction) => {
      const deleteResponse = await fetch(
        `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction/${transaction.id}`,
        {
          method: 'DELETE',
        }
      )
      const data = await deleteResponse.json()
      count--
      console.log(data)
      if (count == 0) {
        setLoading(false)
        hideDialog()
        handleRerender()
      }
    })
  }

  return (
    <>
      {/* Left header logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={[style.heading, innerStyle.whiteColor]}>
            Donation 0.0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDialog}>
          <Entypo
            style={styles.paddingX16}
            name="dots-three-vertical"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Right menu dialog */}
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
          onPress={handleReset}
        >
          <Text>
            Reset{' '}
            {isLoading ? (
              <ActivityIndicator
                style={styles.paddingX16}
                size={15}
                color="#27ae60"
              />
            ) : (
              ''
            )}
          </Text>
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
  whiteColor: {
    color: '#fff',
  },
})
