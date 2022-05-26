import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { RadioButton } from 'react-native-paper'
import { ProgressBar, Colors } from 'react-native-paper'
import NumberPicker from '../components/NumberPicker'
import Header from '../components/Header'
import Selector from '../components/Selector'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Home({ navigation }) {
  const [checked, setChecked] = useState('paypal')
  const [amount, setAmount] = useState(10000)
  const [donateAmount, setDonateAmount] = useState(0)
  const [donated, setDonated] = useState(0)

  const [isLoading, setLoading] = useState(false)
  const isFocused = useIsFocused()

  const config = {
    min: 0,
    max: 1000,
    step: 50,
  }

  // init
  useEffect(async () => {
    const res = await fetch(
      `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction`
    )
    const data = await res.json()
    const donated = data.reduce(
      (result, current) => result + Number(current.amount),
      0
    )
    setDonated(donated)
  }, [isFocused])

  // handle donate
  const handleDonate = () => {
    setLoading(true)
    const body = {
      upvote: 0,
      amount: donateAmount,
      method: checked === 'paypal',
    }
    fetch(`https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setDonated((donated) => donated + donateAmount)
      })
  }

  // helper
  function toNumber(str) {
    if (str == '') return 0
    return parseInt(str)
  }

  console.log(
    `checked: ${checked}`,
    `amount: ${amount}`,
    `donateAmount: ${donateAmount}`,
    `donated: ${donated}`
  )

  return (
    <>
      {/* Header */}
      <Header navigation={navigation}></Header>
      {/* Main app */}
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.app}>
          <Text style={styles.heading}>Welcome Homer</Text>
          <View style={styles.main}>
            {/* Main left */}
            <View style={styles.mainLeft}>
              <Text>Please Give Generously</Text>
              <View style={styles.radioArea}>
                <RadioButton
                  value="first"
                  status={checked === 'paypal' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked((checked) => 'paypal')}
                  style={styles.radio}
                />
                <Text style={styles.inlineText}>PayPal</Text>
              </View>
              <View style={styles.radioArea}>
                <RadioButton
                  value="first"
                  status={checked === 'direct' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked((checked) => 'direct')}
                  style={styles.radio}
                />
                <Text style={styles.inlineText}>Direct</Text>
              </View>
            </View>
            {/* Main right */}
            <View style={styles.mainRight}>
              <Selector
                min={config.min}
                max={config.max}
                step={config.step}
                setter={setDonateAmount}
              ></Selector>
            </View>
          </View>

          {/* App bottom */}
          <View style={styles.appBottom}>
            <View>
              <ProgressBar progress={donated / amount} color={'#27ae60'} />
            </View>
            <View style={styles.amountArea}>
              <Text>Amounts</Text>
              <TextInput
                value={amount}
                onChangeText={(value) => setAmount(toNumber(value))}
                placeholder="enter your amount"
                style={styles.amountInput}
              ></TextInput>
            </View>
            <View style={styles.totalArea}>
              <TouchableOpacity onPress={() => handleDonate()}>
                <Text style={styles.donateBtn}>
                  {isLoading ? (
                    <ActivityIndicator size="small" color="#27ae60" />
                  ) : (
                    'Donate'
                  )}
                </Text>
              </TouchableOpacity>
              <Text>Total so far ${amount - donated}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}
