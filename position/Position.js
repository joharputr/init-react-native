import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import cart from '../cart.png';


//uncomment jika akan menggunakan class component
// class Position extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             buy: 80
//         }
//     }

//     render() {
//         return <View style={{ padding: 20, alignItems: 'center' }}>
//             <Text>Position</Text>
//             <View style={styles.cartWrapper}>
//                 <Image source={cart} style={styles.iconCart}></Image>
//                 <Text style={styles.notif}>{this.state.buy}</Text>
//             </View>
//         </View>
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 buy: 3000
//             });
//         }, 2000);
//     }

//     componentDidUpdate() {
//         console.log("update");
//     }

//     componentWillUnmount() {
//         console.log("unmount");
//     }
// }


//uncomment jika akan menggunakan functional component
const Position = () => {
    const [buy, setBuy] = useState(200);

    useEffect(() => {
        console.log("mount");
        setTimeout(() => { setBuy(900) }, 2000)
        return () => console.log('didUpdate');
    }, [buy]);

    // useEffect(() => {
    //     console.log("did update");
    //     setTimeout(() => { setBuy(400) }, 2000)
    // }, [buy]);
    return <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>Position</Text>
        <View style={styles.cartWrapper}>
            <Image source={cart} style={styles.iconCart}></Image>
            <Text style={styles.notif}>{buy}</Text>
        </View>
    </View>
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
        // width: 24,
        // height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    }
});
