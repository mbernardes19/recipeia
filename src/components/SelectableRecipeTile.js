import React from 'react';
import {View, StyleSheet} from 'react-native';
import RecipeTile from './RecipeTile';
import Checkbox from './Checkbox';
import {useRecipeStore} from '../store/recipe';

const SelectableRecipeTile = ({recipe}) => {
  const selectRecipe = useRecipeStore(state => state.selectRecipe);
  const unselectRecipe = useRecipeStore(state => state.unselectRecipe);

  const checkRecipe = (selectedRecipe, isChecked) => {
    if (isChecked) {
      selectRecipe(selectedRecipe);
    } else {
      unselectRecipe(selectedRecipe.id);
    }
  };

  return (
    <View style={styles.container}>
      <Checkbox onPress={isChecked => checkRecipe(recipe, isChecked)} />
      <RecipeTile recipe={recipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default SelectableRecipeTile;
