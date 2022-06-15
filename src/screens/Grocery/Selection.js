import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import RecipeList from '../../components/RecipeList';
import ActionButton from '../../components/ActionButton';
import {useRecipeStore} from '../../store/recipe';

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

const GrocerySelectionScreen = ({navigation}) => {
  const selectedRecipes = useRecipeStore(state => state.selectedRecipes);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header
          title="Selecione receitas para sua lista de mercado"
          goBackHandler={() => navigation.goBack()}
        />
        <RecipeList recipes={recipes} selectable />
        <ActionButton
          title="Ir às compras"
          disabled={selectedRecipes.length === 0}
          onClick={() => navigation.navigate('GroceryList')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default GrocerySelectionScreen;
