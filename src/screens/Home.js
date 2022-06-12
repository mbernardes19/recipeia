import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SearchInput from '../components/SearchInput';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import ActionButton from '../components/ActionButton';

const recipes = [
  {
    title: 'Omelete de frango',
    ingredients:
      'Lorem ipsum dolor; sit amet consectetur; adipiscing elit; Donec condimentum et eros; ac aliquet. Suspendisse id neque eget; velit ultricies commodo.',
    image:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1154209327.jpg',
  },
  {
    title: 'Omelete de frango',
    ingredients:
      'Lorem ipsum dolor; sit amet consectetur; adipiscing elit; Donec condimentum et eros; ac aliquet. Suspendisse id neque eget; velit ultricies commodo.',
    image:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1154209327.jpg',
  },
  {
    title: 'Omelete de frango',
    ingredients:
      'Lorem ipsum dolor; sit amet consectetur; adipiscing elit; Donec condimentum et eros; ac aliquet. Suspendisse id neque eget; velit ultricies commodo.',
    image:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1154209327.jpg',
  },
  {
    title: 'Omelete de frango',
    ingredients:
      'Lorem ipsum dolor; sit amet consectetur; adipiscing elit; Donec condimentum et eros; ac aliquet. Suspendisse id neque eget; velit ultricies commodo.',
    image:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1154209327.jpg',
  },
  {
    title: 'Omelete de frango',
    ingredients:
      'Lorem ipsum dolor; sit amet consectetur; adipiscing elit; Donec condimentum et eros; ac aliquet. Suspendisse id neque eget; velit ultricies commodo.',
    image:
      'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1154209327.jpg',
  },
];

const HomeScreen = () => (
  <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      <SearchInput />
      <Header title="Últimas receitas" />
      <RecipeList recipes={recipes} />
      <Header title="Criar receita" />
    </ScrollView>
    <ActionButton title="Fazer lista de mercado" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
