import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

import Header from '../components/Header'
import Transaction from '../components/Transaction'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Report({ navigation }) {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch('https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [])

  console.log(transactions)
  return (
    <>
      <Header navigation={navigation}></Header>
      <View
        style={[styles.flexRow, styles.paddingY4, styles.justifyContentAround]}
      >
        <Text style={innerStyles.thead}>Upvotes</Text>
        <Text style={innerStyles.thead}>Amount</Text>
        <Text style={innerStyles.thead}>Method</Text>
        <Text></Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={Transaction}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

const innerStyles = StyleSheet.create({
  thead: { color: 'blue', fontWeight: 'bold' },
})
