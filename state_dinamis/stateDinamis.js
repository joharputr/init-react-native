import React, { Component, useState } from 'react'
import { Text, View, Button } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <View >
            <Text style={{ textAlign: "center" }}> {number} </Text>
            <Button title="Tambah" color="red" onPress={() => setNumber(number + 2)}></Button>
        </View>
    );
};

class CounterClass extends Component {
    state = {
        number: 0
    }
    render() {
        return (
            <View style={{ padding: 10, paddingTop: 10 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Contoh State dengan Class</Text>
                <Text style={{ textAlign: 'center' }}>{this.state.number}</Text>
                <Button title="Tambah" color="red" onPress={() => this.setState({ number: this.state.number + 1 })}></Button>
            </View>
        )
    }
}

const stateDinamis = () => {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }} >Materi State</Text>
            <Counter />
            <CounterClass />
        </View>
    )
}

export default stateDinamis
