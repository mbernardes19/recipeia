import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import SearchIcon from '../assets/SearchIcon';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <SearchIcon style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholderTextColor="#9b9b9b"
        placeholder="Procurar por uma receita"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 17,
    left: 11,
    zIndex: 1,
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: 6,
    color: '#000',
    paddingLeft: 36,
  },
});

export default SearchInput;
