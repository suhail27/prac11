/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Practical - Navigation Applications
 * App.js
 */

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home';
import ScheduleScreen from './schedule';
import TalkScreen from './talk';
import SpeakersScreen from './speaker';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Talk" component={TalkScreen} />
        <Stack.Screen name="Speaker" component={SpeakersScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

