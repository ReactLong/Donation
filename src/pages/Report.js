import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  FlatList,
} from 'react-native'

import Header from '../components/Header'
import Transaction from '../components/Transaction'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Report({ navigation }) {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch('https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [count])

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
      <ScrollView>
        {transactions.map((item, index) => (
          <Transaction
            handleRerender={handleCount}
            navigation={navigation}
            item={item}
            key={index}
          ></Transaction>
        ))}
      </ScrollView>
    </>
  )
}

const innerStyles = StyleSheet.create({
  thead: { color: 'blue', fontWeight: 'bold' },
})
