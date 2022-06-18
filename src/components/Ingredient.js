import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import Checkbox from './Checkbox';

const Ingredient = ({ingredient}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox onPress={() => setIsChecked(!isChecked)} />
      <Text style={isChecked ? styles.checked : styles.notChecked}>
        {ingredient}
      </Text>
    </View>
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
