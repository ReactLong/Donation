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
import NumberPicker from '../components/NumberPicker'
import Header from '../components/Header'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Home({ navigation }) {
  const [checked, setChecked] = React.useState('paypal')
  const [amount, setAmount] = React.useState(1000)
  const [donateAmount, setDonateAmount] = React.useState(500)
  const [donated, setDonated] = React.useState(0)

  const handleChecked = () => {
    setChecked((checked) => !checked)
  }

  const handleDonate = () => {
    setDonated((donated) => donated + donateAmount)
  }

  function toNumber(str) {
    if (str == '') return 0
    return parseInt(str)
  }
  return (
    <>
      {/* Header */}
      <Header navigation={navigation}></Header>

      {/* Main app */}
      <View style={styles.container}>
        {/* <StatusBar style="dark" /> */}
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
              <NumberPicker
                value={donateAmount}
                onChangeText={(value) => setDonateAmount(toNumber(value))}
              ></NumberPicker>
            </View>
          </View>

          {/* App bottom */}
          <View style={styles.appBottom}>
            <View>
              <Text>Progress bar {(donated / amount) * 100}%</Text>
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
