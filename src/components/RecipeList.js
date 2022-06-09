import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import RecipeTile from './RecipeTile';

const RecipeList = ({recipes}) => {
  const recipesSlice = recipes.slice(0, 4);

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
      {recipes.length > 4 && <Text style={styles.showAllBtn}>Ver todas</Text>}
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
