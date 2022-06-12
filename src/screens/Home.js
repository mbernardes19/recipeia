import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import ActionButton from '../components/ActionButton';
import CreateRecipe from '../components/CreateRecipe';
import {useRecipeStore} from '../store/recipe';

const HomeScreen = ({navigation}) => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <SearchInput />
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
