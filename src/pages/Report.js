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
import Hr from '../components/Hr'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Report({ navigation }) {
  const [rerender, setRerender] = useState(false)
  const handleRerender = () => {
    setRerender(!rerender)
  }
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch('https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [rerender])

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
      <Hr></Hr>
      <ScrollView>
        {transactions.map((item, index) => (
          <Transaction
            handleRerender={handleRerender}
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
