import React, {useEffect, useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import SearchIcon from '../assets/SearchIcon';
import {useRecipeStore} from '../store/recipe';

const SearchInput = () => {
  const search = useRecipeStore(state => state.search);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const clearSearchTerm = useRecipeStore(state => state.clearSearchTerm);

  const inputRef = useRef(null);

  useEffect(() => {
    if (!searchTerm) {
      clearSearchTerm();
    }
  }, [searchTerm, clearSearchTerm]);

  return (
    <View style={styles.container}>
      <SearchIcon style={styles.icon} />
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholderTextColor="#9b9b9b"
        placeholder="Procurar por uma receita"
        value={searchTerm}
        onChangeText={text => {
          search(text);
        }}
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
