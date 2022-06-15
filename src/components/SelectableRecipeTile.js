import React from 'react';
import {View, StyleSheet} from 'react-native';
import RecipeTile from './RecipeTile';
import Checkbox from './Checkbox';
import {useRecipeStore} from '../store/recipe';

const SelectableRecipeTile = ({recipe}) => {
  const selectRecipe = useRecipeStore(state => state.selectRecipe);

  return (
    <View style={styles.container}>
      <Checkbox onPress={() => selectRecipe(recipe)} />
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
