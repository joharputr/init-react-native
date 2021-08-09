import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MateriFlaxBox from './MateriFlaxBox';

export default function App() {
  return (
    <View style={styles.containeeer}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Stext />
      <BloxGreen /> */}
      <ScrollView>
        <MateriFlaxBox />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containeeer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stext = () => {
  return <Text>Testijng</Text>;
}

class BloxGreen extends Component {
  render() {
    return <Text> blok green</Text>
  }
}
