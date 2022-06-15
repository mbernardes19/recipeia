import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import ActionButton from '../components/ActionButton';
import CreateRecipe from '../components/CreateRecipe';
import {useRecipeStore} from '../store/recipe';

const HomeScreen = ({navigation}) => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchStarted = useRecipeStore(state => state.searchStarted);
  const foundRecipes = useRecipeStore(state => state.foundRecipes);
  const clearSearchTerm = useRecipeStore(state => state.clearSearchTerm);

  if (searchStarted) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Header
            title="Receitas encontradas"
            goBackHandler={() => {
              clearSearchTerm();
            }}
          />
          <RecipeList recipes={foundRecipes} />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header title="Últimas receitas" />
        <RecipeList
          recipes={recipes}
          onViewAll={() => navigation.navigate('Recipes')}
        />
        <Header title="Criar receita" />
        <CreateRecipe onClick={() => navigation.navigate('CreateRecipe')} />
        <ActionButton title="Fazer lista de mercado" />
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

export default HomeScreen;
