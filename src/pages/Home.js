import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { RadioButton } from 'react-native-paper'
import { ProgressBar, Colors } from 'react-native-paper'
import NumberPicker from '../components/NumberPicker'
import Header from '../components/Header'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Home({ navigation }) {
  const [checked, setChecked] = React.useState('paypal')
  const [amount, setAmount] = React.useState(1000)
  const [donateAmount, setDonateAmount] = React.useState(0)
  const [donated, setDonated] = React.useState(0)

  console.log(
    `checked: ${checked}`,
    `amount: ${amount}`,
    `donateAmount: ${donateAmount}`,
    `donated: ${donated}`
  )

  const handleDonate = () => {
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
      .then((data) => setDonated((donated) => donated + donateAmount))
  }

  function toNumber(str) {
    if (str == '') return 0
    return parseInt(str)
  }

  React.useEffect(async () => {
    const res = await fetch(
      `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction`
    )
    const data = await res.json()
    const donated = data.reduce(
      (result, current) => result + Number(current.amount),
      0
    )
    setDonated(donated)
  }, [])
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
              <NumberPicker setDonateAmount={setDonateAmount}></NumberPicker>
            </View>
          </View>

          {/* App bottom */}
          <View style={styles.appBottom}>
            <View>
              <ProgressBar progress={donated / amount} color={Colors.red800} />
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
                <Text style={styles.donateBtn}>Donate</Text>
              </TouchableOpacity>
              <Text>Total {donated}$</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.footer}>
        <Text>footer</Text>
      </View> */}
      </View>
    </>
  )
}
