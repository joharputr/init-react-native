import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Buy from './buy'
import Cart from './cart'

const CommunicationComponent = () => {
    const [totalData, setTotalData] = useState(0)
    return (
        <View style={{ padding: 0 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Komunikasi Antar Komponen</Text>
            <Buy onButtonPress={() => setTotalData(totalData + 1)} />
            <Cart data={totalData} />
        </View>
    )
}

export default CommunicationComponent

const styles = StyleSheet.create({})
