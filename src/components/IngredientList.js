import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Ingredient from './Ingredient';

const IngredientList = ({recipe}) => {
  const ingredients = recipe.ingredients.split('\n');

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.recipeTitle}>{recipe.title}</Text>
      <View style={styles.ingredientsContainer}>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollContainer: {
    width: '100%',
  },
  showAllBtn: {
    color: '#000',
  },
  recipeTitle: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ingredientsContainer: {
    display: 'flex',
    marginLeft: 10,
    marginBottom: 30,
  },
});

export default IngredientList;
