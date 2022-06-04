import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

export default function Header({ navigation, handleRerender, donated }) {
  const [visible, setVisible] = React.useState(false)
  const [isLoading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  // handle reset
  const handleReset = async () => {
    setLoading(true)
    const res = await fetch(
      'https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction'
    )
    const transactions = await res.json()

    // delete all
    let count = transactions.length
    if (count == 0) {
      setLoading(false)
      hideDialog()
      return
    }

    // foreach
    transactions.forEach(async (transaction) => {
      const deleteResponse = await fetch(
        `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction/${transaction.id}`,
        {
          method: 'DELETE',
        }
      )
      const data = await deleteResponse.json()
      count--
      console.log(data)
      if (count == 0) {
        setLoading(false)
        hideDialog()
        handleRerender()
        setModalVisible(false)
        navigation.navigate('Home')
      }
    })
  }

  return (
    <>
      <StatusBar style="dark" />

      {/* Left header logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={[style.heading, innerStyle.whiteColor]}>
            Donation 0.0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDialog}>
          <Entypo
            style={styles.paddingX16}
            name="dots-three-vertical"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Right menu dialog */}
      {visible && (
        <View style={[innerStyle.dialogMenu]}>
          <TouchableHighlight
            style={[style.paddingX16, style.paddingY16, style.borderBottom]}
            underlayColor="#ddd"
            onPress={() => {
              hideDialog()
              navigation.navigate('Home')
            }}
          >
            <Text>Donation</Text>
          </TouchableHighlight>
          {donated !== 0 && (
            <TouchableHighlight
              style={[style.paddingX16, style.paddingY16, style.borderBottom]}
              underlayColor="#ddd"
              onPress={() => setModalVisible(true)}
            >
              <Text>
                Reset
                {isLoading ? (
                  <ActivityIndicator
                    style={styles.paddingX4}
                    size={15}
                    color="#27ae60"
                  />
                ) : (
                  ''
                )}
              </Text>
            </TouchableHighlight>
          )}
          {donated !== 0 && (
            <TouchableHighlight
              style={[style.paddingX16, style.paddingY16, style.borderBottom]}
              underlayColor="#ddd"
              onPress={() => {
                navigation.navigate('Report')
                hideDialog()
              }}
            >
              <Text>Report</Text>
            </TouchableHighlight>
          )}
        </View>
      )}

      {/* Modal */}
      <View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setModalVisible(!modalVisible)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Bạn muốn xóa toàn bộ giao dịch?
                </Text>
                <Text style={styles.modalText}>
                  Hành động này không thể khôi phục!
                </Text>
                <View style={[styles.flexRow]}>
                  <Pressable
                    style={[
                      styles.button,
                      styles.buttonDanger,
                      { marginRight: 50 },
                    ]}
                    onPress={() => handleReset()}
                  >
                    <Text style={styles.textStyle}>Xóa</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(false)
                      hideDialog()
                    }}
                  >
                    <Text style={styles.textStyle}>Hủy</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </>
  )
}

const innerStyle = StyleSheet.create({
  dialogMenu: {
    marginTop: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    width: '30%',
    backgroundColor: '#fff',
  },
  whiteColor: {
    color: '#fff',
  },
})
