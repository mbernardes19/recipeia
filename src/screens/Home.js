import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';

const HomeScreen = () => (
  <View style={styles.container}>
    <SearchInput />
    <Header title="Últimas receitas" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
