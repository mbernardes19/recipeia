import create from 'zustand';
import {loadRecipes, createRecipe} from '../data/repository/recipe';

export const useRecipeStore = create(set => ({
  recipes: [],
  loadRecipesFromDB: async () => {
    const recipesFromDB = await loadRecipes();
    set({recipes: recipesFromDB});
  },
  createRecipe: async newRecipe => {
    await createRecipe(newRecipe);
    set(state => ({recipes: [...state.recipes, newRecipe]}));
  },
}));
