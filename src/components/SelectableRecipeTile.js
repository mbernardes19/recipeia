import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import RecipeTile from './RecipeTile';
import Checkbox from './Checkbox';
import {useRecipeStore} from '../store/recipe';

const SelectableRecipeTile = ({recipe}) => {
  const selectRecipe = useRecipeStore(state => state.selectRecipe);
  const unselectRecipe = useRecipeStore(state => state.unselectRecipe);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checkRecipe = selectedRecipe => {
      if (isChecked) {
        selectRecipe(selectedRecipe);
      } else {
        unselectRecipe(selectedRecipe.id);
      }
    };
    checkRecipe(recipe);
  }, [isChecked, selectRecipe, unselectRecipe, recipe]);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsChecked(!isChecked);
      }}
      style={styles.container}
    >
      <Checkbox checked={isChecked} />
      <RecipeTile recipe={recipe} />
    </TouchableOpacity>
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
