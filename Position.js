import { white } from "ansi-colors";
import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import cart from './cart.png';

class Position extends Component {
    render() {
        return <View style={styles.wrapper}>
            <Text>Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}></Image>
                <Text style={styles.notif}>10</Text>
            </View>
        </View>
    }
}

export default Position;

const styles = StyleSheet.create({
    wrapper: { padding: 20, alignItems: 'center' },
    cartWrapper: {
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#3cb371',
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCart: {
        width: 50, height: 50
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: "#3cb371",
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    }
});
