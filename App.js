import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Play from './components/Play';
import Next from './components/Next'; // Import màn hình tiếp theo của bạn
import { NavigationContainer } from '@react-navigation/native'; // Import useNavigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Play">
      <Stack.Screen name="Play" component={Play} />
      <Stack.Screen name="Next" component={Next} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
