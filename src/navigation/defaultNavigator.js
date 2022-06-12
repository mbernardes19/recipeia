import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import CreateRecipeScreen from '../screens/Recipe/Create';
import RecipesScreen from '../screens/Recipe/List';

const Stack = createNativeStackNavigator();

const DefaultNavigator = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
    <Stack.Screen name="Recipes" component={RecipesScreen} />
  </Stack.Navigator>
);

export default DefaultNavigator;
