import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Alert,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
} from 'react-native'

import Header from '../components/Header'
import Transaction from '../components/Transaction'
import Hr from '../components/Hr'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export default function Report({ navigation }) {
  const [rerender, setRerender] = useState(false)
  const [refreshing, setRefreshing] = React.useState(false)

  // refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const handleRerender = () => {
    setRerender(!rerender)
  }
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetch('https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [rerender, refreshing])

  return (
    <>
      <Header navigation={navigation} handleRerender={handleRerender}></Header>
      <View
        style={[styles.flexRow, styles.paddingY4, styles.justifyContentAround]}
      >
        <Text style={innerStyles.thead}>Upvotes</Text>
        <Text style={innerStyles.thead}>Amount</Text>
        <Text style={innerStyles.thead}>Method</Text>
        <Text style={innerStyles.thead}></Text>
      </View>
      <Hr></Hr>

      {/* Table */}
      <ScrollView
        style={[styles.flex1, {}]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
