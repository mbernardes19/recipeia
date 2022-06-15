import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import CreateRecipeScreen from '../screens/Recipe/Create';
import RecipesScreen from '../screens/Recipe/List';
import SearchInput from '../components/SearchInput';

const Stack = createNativeStackNavigator();

const DefaultNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: true,
      header: () => <SearchInput />,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="CreateRecipe"
      component={CreateRecipeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Recipes"
      component={RecipesScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default DefaultNavigator;
