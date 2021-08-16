import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MateriFlaxBox from './MateriFlaxBox';
import Position from './position/Position';
import StateDInamis from './state_dinamis/stateDinamis';
import CommunicationComponent from './communication_between_components/communication';

export default function App() {
  return (
    <View >
      <Appbar.Header style={styles.bottom}>
        <Appbar.BackAction />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView>
        {/* <MateriFlaxBox /> */}
        <Position></Position>
        <ContohProps></ContohProps>
        <StateDInamis></StateDInamis>
        <CommunicationComponent></CommunicationComponent>
      </ScrollView>
    </View>
  );
}

const ContohProps = () => {
  return <View>
    <Text style={styleText.textCenter}> Contoh Props</Text>
    <Content data="test"></Content>
  </View>
}

const Content = (props) => {
  return (
    <Text style={styleText.content}>
      {props.data}
    </Text>
  );
}

const styleText = StyleSheet.create({
  textCenter: {
    'fontWeight': 'bold',
    'textAlign': 'center'
  },
  content: {
    'textAlign': 'center'
  }
})

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'red',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

