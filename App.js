import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import MateriFlaxBox from './MateriFlaxBox';
import Position from './position/Position';
import StateDInamis from './state_dinamis/stateDinamis';
import CommunicationComponent from './communication_between_components/communication';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <MyStack></MyStack>
  );
}

const HomeScreen = ({ navigation }) => {
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
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
      </ScrollView>
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


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

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};