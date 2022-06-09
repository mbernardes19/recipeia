import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const DefaultNavigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default DefaultNavigator;
