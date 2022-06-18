import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import RecipeList from '../../components/RecipeList';
import ActionButton from '../../components/ActionButton';
import {useRecipeStore} from '../../store/recipe';
import shallow from 'zustand/shallow';
import {keysToArray} from '../../utils/mapToArray';

const GrocerySelectionScreen = ({navigation}) => {
  const recipes = useRecipeStore(state => state.recipes);
  const selectedRecipes = useRecipeStore(
    state => keysToArray(state.selectedRecipes),
    shallow,
  );

  console.log('selected recipes', selectedRecipes);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header
          title="Selecione receitas para sua lista de mercado"
          goBackHandler={() => navigation.goBack()}
        />
        <RecipeList recipes={recipes} selectable />
        <ActionButton
          title="Ir às compras"
          disabled={selectedRecipes.length === 0}
          onClick={() => navigation.navigate('GroceryList')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default GrocerySelectionScreen;
