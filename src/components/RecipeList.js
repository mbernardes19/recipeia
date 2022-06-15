import React from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RecipeTile from './RecipeTile';
import SelectableRecipeTile from './SelectableRecipeTile';

const RecipeList = ({recipes, selectable, onViewAll}) => {
  const recipesSlice =
    onViewAll && recipes.length > 4 ? recipes.slice(0, 4) : recipes;

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
});

export default RecipeList;
