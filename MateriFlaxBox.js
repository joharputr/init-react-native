import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class MateriFlaxBox extends Component {
    render() {
        return <View style={{ flexDirection: 'row' ,justifyContent : 'space-around'}}>
            <View style={{ backgroundColor: '#3cb371', width : 40, height: 50, marginBottom: 0 }}></View>
            <View style={{ backgroundColor: '#233287', width: 40, height: 100, marginBottom: 0 }}></View>
            
            {/* <View style={{ backgroundColor: '#a8e3f1', flex:1, height: 100, marginBottom: 0 }}></View> */}
        </View>
    }
}

export default MateriFlaxBox;