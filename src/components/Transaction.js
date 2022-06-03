import { FontAwesome } from '@expo/vector-icons'

import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
  Alert,
  Modal,
  Pressable,
} from 'react-native'

import style from '../../assets/css/style.css'
const styles = StyleSheet.create(style)

import Hr from './Hr'

export default function Transaction({ navigation, handleRerender, item }) {
  const [isLoading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  function showToastMessage() {
    ToastAndroid.show(
      `Amount: ${item.amount}; Type: ${item.method}; Upvotes: ${item.id}`,
      ToastAndroid.SHORT
    )
  }

  function handleDelete() {
    setLoading(true)
    fetch(
      `https://62875b567864d2883e8388b6.mockapi.io/api/v1/Transaction/${item.id}`,
      {
        method: 'DELETE',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setModalVisible(false)
        handleRerender()
      })
  }
  return (
    <>
      <TouchableOpacity onPress={() => showToastMessage()}>
        <View
          style={[
            styles.flexRow,
            styles.paddingY4,
            styles.justifyContentAround,
          ]}
        >
          <Text>{item.id}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.method ? 'Paypal' : 'Direct'}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#27ae60" />
            ) : (
              <FontAwesome name="times" size={24} color="red" />
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* Modal */}
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
                Bạn muốn xóa giao dịch số {item.id} -
                {item.method ? ' Paypal' : ' Direct'} - {item.amount}
              </Text>
              <Text style={styles.modalText}>
                Hành động này không thể khôi phục! Vẫn xóa?
              </Text>
              <View style={[styles.flexRow]}>
                <Pressable
                  style={[
                    styles.button,
                    styles.buttonDanger,
                    { marginRight: 50 },
                  ]}
                  onPress={() => handleDelete()}
                >
                  <Text style={styles.textStyle}>Xóa</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Hủy</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Hr></Hr>
    </>
  )
}
