import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import RecipeList from '../../components/RecipeList';
import {useRecipeStore} from '../../store/recipe';
import ActionButton from '../../components/ActionButton';
import {valuesToArray} from '../../utils/mapToArray';

const GroceryListScreen = ({navigation}) => {
  const selectedRecipes = useRecipeStore(state => state.selectedRecipes);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header title="Lista de mercado" />
        <RecipeList recipes={valuesToArray(selectedRecipes)} ingredientsOnly />
        <ActionButton
          title="Finalizar compras"
          onClick={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default GroceryListScreen;
