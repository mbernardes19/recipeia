import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import ActionButton from '../components/ActionButton';
import CreateRecipe from '../components/CreateRecipe';
import {useRecipeStore} from '../store/recipe';

const mockRecipes = [
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

const HomeScreen = ({navigation}) => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchStarted = useRecipeStore(state => state.searchStarted);
  const foundRecipes = useRecipeStore(state => state.foundRecipes);
  const clearSearchTerm = useRecipeStore(state => state.clearSearchTerm);

  if (searchStarted) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Header
            title="Receitas encontradas"
            goBackHandler={() => {
              clearSearchTerm();
            }}
          />
          <RecipeList recipes={foundRecipes} />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header title="Últimas receitas" />
        <RecipeList
          recipes={mockRecipes}
          onViewAll={() => navigation.navigate('Recipes')}
        />
        <Header title="Criar receita" />
        <CreateRecipe onClick={() => navigation.navigate('CreateRecipe')} />
        <ActionButton
          title="Fazer lista de mercado"
          onClick={() => navigation.navigate('GrocerySelection')}
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

export default HomeScreen;
