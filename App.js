import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import Report from './src/pages/Report'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
