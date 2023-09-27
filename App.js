import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Play from './components/Play';
import Show from './components/Show';
import Next from './components/Setting'; // Import màn hình tiếp theo của bạn
import { NavigationContainer } from '@react-navigation/native'; // Import useNavigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Show">
        <Stack.Screen name="Show" component={Show} options={{
          headerShown: false
        }} />
      <Stack.Screen name="Next" component={Next} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
