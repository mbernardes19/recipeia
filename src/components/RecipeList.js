import React from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RecipeTile from './RecipeTile';
import SelectableRecipeTile from './SelectableRecipeTile';
import IngredientList from './IngredientList';

const RecipeList = ({recipes, selectable, onViewAll, ingredientsOnly}) => {
  const recipesSlice =
    onViewAll && recipes.length > 4 ? recipes.slice(0, 4) : recipes;

  if (recipes.length === 0) {
    return <Text style={styles.noRecipe}>Nenhuma receita disponível</Text>;
  }

  if (ingredientsOnly) {
    return (
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.container}
      >
        {recipesSlice.map((recipe, index) => (
          <IngredientList key={index} recipe={recipe} />
        ))}
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {recipesSlice.map((recipe, index) =>
        selectable ? (
          <SelectableRecipeTile key={index} recipe={recipe} />
        ) : (
          <RecipeTile withSpacing key={index} recipe={recipe} />
        ),
      )}
      {onViewAll && recipes.length > 4 && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.showAllBtn}>Ver todas</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  showAllBtn: {
    color: '#000',
  },
  noRecipe: {
    fontSize: 20,
    color: '#e3e3e3',
  },
});

export default RecipeList;
