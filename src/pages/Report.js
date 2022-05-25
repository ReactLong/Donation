import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button } from 'react-native'

import Header from '../components/Header'

export default function Report({ navigation }) {
  return (
    <>
      <Header navigation={navigation}></Header>
      <View>
        <Text>Report</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  )
}
