import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cart = (props) => {
    return (
        <View style={{ paddingLeft: 20 }}>
            <Text> Jumlah Barang = {props.data} </Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})
