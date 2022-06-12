import React from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RecipeTile from './RecipeTile';

const RecipeList = ({recipes, onViewAll}) => {
  const recipesSlice = onViewAll ? recipes.slice(0, 4) : recipes;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {recipesSlice.map(({title, ingredients, image}, index) => (
        <RecipeTile
          key={index}
          title={title}
          ingredients={ingredients}
          imageUrl={image}
        />
      ))}
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
