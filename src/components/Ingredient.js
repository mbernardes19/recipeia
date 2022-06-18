import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Checkbox from './Checkbox';

const Ingredient = ({ingredient}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked(!isChecked)}
    >
      <Checkbox checked={isChecked} />
      <Text style={isChecked ? styles.checked : styles.notChecked}>
        {ingredient}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checked: {
    textDecorationLine: 'line-through',
    color: '#e5e5e5',
  },
  notChecked: {
    textDecorationLine: 'none',
  },
});

export default Ingredient;
