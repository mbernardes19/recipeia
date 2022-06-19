import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import RecipeDetails from '../../components/RecipeDetails';
import {useRecipeStore} from '../../store/recipe';

const RecipeDetailsScreen = ({route, navigation}) => {
  const {id} = route.params;
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const recipe = recipes.find(rec => rec.id === id);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header
          title={recipe.title}
          goBackHandler={() => navigation.goBack()}
          deleteButtonHandler={() => {
            deleteRecipe(id);
            navigation.navigate('Home');
          }}
        />
        <RecipeDetails recipe={recipe} />
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

export default RecipeDetailsScreen;
