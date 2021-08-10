import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import cart from './cart.png';

class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buy: 80
        }
    }

    render() {
        return <View style={{ padding: 20, alignItems: 'center' }}>
            <Text>Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}></Image>
                <Text style={styles.notif}>{this.state.buy}</Text>
            </View>
        </View>
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                buy: 3000
            });
        }, 2000);
    }

    componentDidUpdate() {
        console.log("update");
    }

    componentWillUnmount() {
        console.log("unmount");
    }
}

export default Position;


const styles = StyleSheet.create({
    cartWrapper: {
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#3cb371',
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
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
