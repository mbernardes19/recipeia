import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';

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
      <Header title="Últimas receitas" />
      <Header title="Criar receita" />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
