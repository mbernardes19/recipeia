import React, {useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import SearchIcon from '../assets/SearchIcon';
import {useRecipeStore} from '../store/recipe';

const SearchInput = () => {
  const search = useRecipeStore(state => state.search);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const clearSearchTerm = useRecipeStore(state => state.clearSearchTerm);

  useEffect(() => {
    if (!searchTerm) {
      clearSearchTerm();
    }
  }, [searchTerm, clearSearchTerm]);

  return (
    <View style={styles.container}>
      <SearchIcon style={styles.icon} />
      <TextInput
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
    padding: 10,
    paddingBottom: 0,
  },
  icon: {
    position: 'absolute',
    top: 27,
    left: 21,
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
