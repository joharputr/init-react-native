import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Buy = (props) => {
    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Button title="Beli Barang" onPress={props.onButtonPress}></Button>
        </View>
    )
}

export default Buy

const styles = StyleSheet.create({})
