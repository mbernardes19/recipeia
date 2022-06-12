import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AddIcon from '../assets/AddIcon';

const CreateRecipe = ({onClick}) => (
  <TouchableOpacity style={styles.container} onPress={onClick}>
    <AddIcon />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 165,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderRadius: 6,
  },
});

export default CreateRecipe;
