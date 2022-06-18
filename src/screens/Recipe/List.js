import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import RecipeList from '../../components/RecipeList';
import {useRecipeStore} from '../../store/recipe';

const ListRecipesScreen = ({navigation}) => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header title="Receitas" goBackHandler={() => navigation.goBack()} />
        <RecipeList recipes={recipes} />
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

export default ListRecipesScreen;
