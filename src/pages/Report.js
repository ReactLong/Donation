import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button } from 'react-native'

export default function Report({ navigation }) {
  return (
    <>
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
