import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MateriFlaxBox from './MateriFlaxBox';
import Position from './Position';

export default function App() {
  return (
    <View >
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Stext />
      <BloxGreen /> */}
      <Appbar.Header style={styles.bottom}>
        <Appbar.BackAction />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={() => console.log('Pressed mail')} />
        {/* <Appbar.Action icon="dots-vertical" /> */}
      </Appbar.Header>
      <ScrollView>
        {/* <MateriFlaxBox /> */}
        <Position></Position>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    color: '#ff00ff',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// const styles = StyleSheet.create({
//   containeeer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const Stext = () => {
  return <Text>Testijng</Text>;
}

class BloxGreen extends Component {
  render() {
    return <Text> blok green</Text>
  }
}
