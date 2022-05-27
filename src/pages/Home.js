import {
  StyleSheet,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { RadioButton, Text } from 'react-native-paper'
import { ProgressBar, Colors } from 'react-native-paper'
import NumberPicker from '../components/NumberPicker'
import Header from '../components/Header'
import Selector from '../components/Selector'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Home({ navigation }) {
  const [checked, setChecked] = useState('PayPal')
  const [amount, setAmount] = useState(10000)
  const [donateAmount, setDonateAmount] = useState(0)
  const [donated, setDonated] = useState(0)

  const [isLoading, setLoading] = useState(false)
  const [rerender, setRerender] = useState(false)
  const isFocused = useIsFocused()
  const handleRerender = () => {
    setRerender(!rerender)
  }

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
  }, [isFocused, rerender])

  // handle donate
  const handleDonate = () => {
    setLoading(true)
    const body = {
      upvote: 0,
      amount: donateAmount,
      method: checked === 'PayPal',
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

  useEffect(() => {
    console.log(
      `checked: ${checked}`,
      `amount: ${amount}`,
      `donateAmount: ${donateAmount}`,
      `donated: ${donated}`
    )
  }, [donated])

  return (
    <>
      {/* Header */}
      <Header navigation={navigation} handleRerender={handleRerender}></Header>
      {/* Main app */}
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.app}>
          <Text style={styles.heading}>Welcome Homer</Text>
          <View style={styles.main}>
            {/* Main left */}
            <View style={styles.mainLeft}>
              <Text>Please Give Generously</Text>
              <RadioButton.Group
                onValueChange={(newValue) => setChecked(newValue)}
                value={checked}
              >
                <View style={style.radioArea}>
                  <RadioButton value="PayPal" style={styles.radio} />
                  <Text>PayPal</Text>
                </View>
                <View style={style.radioArea}>
                  <RadioButton value="Direct" style={styles.radio} />
                  <Text>Direct</Text>
                </View>
              </RadioButton.Group>
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
