import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { RadioButton } from 'react-native-paper'

export default function App() {
  const [checked, setChecked] = React.useState(false)
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
      <View style={styles.header}>
        <Text style={styles.heading}>Donation 1.5</Text>
      </View>
      <View style={styles.container}>
        {/* <StatusBar style="dark" /> */}
        <View style={styles.app}>
          <Text style={styles.heading}>Welcome Homer</Text>
          <View style={styles.main}>
            <View style={styles.mainLeft}>
              <View style={styles.radioArea}>
                <RadioButton
                  value="first"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => setChecked((checked) => !checked)}
                  style={styles.radio}
                />
                <Text style={styles.inlineText}>PayPal</Text>
              </View>
              <View style={styles.radioArea}>
                <RadioButton
                  value="first"
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => setChecked((checked) => !checked)}
                  style={styles.radio}
                />
                <Text style={styles.inlineText}>Direct</Text>
              </View>
            </View>
            <View style={styles.mainRight}>
              <Text>Number Picker</Text>
              <TextInput
                value={donateAmount}
                onChangeText={(value) => setDonateAmount(toNumber(value))}
                placeholder="enter your donate"
                style={styles.donateInput}
                autoFocus={true}
              ></TextInput>
            </View>
          </View>
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
              <TouchableOpacity 
                onPress={() => handleDonate()}
                >
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

const css = {
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ff00bb',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: '#27ae60',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  app: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
  },
  main: {
    flexDirection: 'row',
    flex: 1,
  },
  mainLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  mainRight: {
    flex: 1,
    justifyContent: 'center',
  },
  donateInput: {
    ...css.input,
    marginTop: 16,
  },
  radioArea: {
    ...css.flexRow,
  },
  amountArea: {
    ...css.flexRow,
    height: 50,
  },
  amountInput: {
    ...css.input,
    flex: 1,
    marginLeft: 16,
  },
  totalArea: {
    ...css.flexRow,
    justifyContent: 'space-between',
    height: 50,
  },
  donateBtn: {
    ...css.input
  }
})
