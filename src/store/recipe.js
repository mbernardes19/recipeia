import create from 'zustand';
import {loadRecipes} from '../data/repository/recipe';

export const useRecipeStore = create(set => ({
  recipes: [],
  loadRecipesFromDB: async () => {
    const recipesFromDB = await loadRecipes();
    set({recipes: recipesFromDB});
  },
}));
