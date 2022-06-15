import create from 'zustand';
import {loadRecipes, createRecipe} from '../data/repository/recipe';

export const useRecipeStore = create(set => ({
  recipes: [],
  foundRecipes: [],
  searchTerm: '',
  searchStarted: false,
  clearSearchTerm: () => {
    set(() => ({searchStarted: false, searchTerm: ''}));
  },
  search: searchTerm => {
    set(state => {
      const found = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      return {searchStarted: true, foundRecipes: found, searchTerm};
    });
  },
  loadRecipesFromDB: async () => {
    const recipesFromDB = await loadRecipes();
    set({recipes: recipesFromDB});
  },
  createRecipe: async newRecipe => {
    await createRecipe(newRecipe);
    set(state => ({recipes: [...state.recipes, newRecipe]}));
  },
}));
