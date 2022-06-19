import create from 'zustand';
import {
  loadRecipes,
  createRecipe,
  deleteRecipe,
} from '../data/repository/recipe';

export const useRecipeStore = create(set => ({
  recipes: [],
  foundRecipes: [],
  searchTerm: '',
  searchStarted: false,
  selectedRecipes: new Map(),
  deleteRecipe: async recipeId => {
    await deleteRecipe(recipeId);
    set(state => {
      const foundRecipeIdx = state.recipes.findIndex(
        recipe => recipe.id === recipeId,
      );

      if (foundRecipeIdx >= 0) {
        const updatedRecipes = [...state.recipes];
        updatedRecipes.splice(foundRecipeIdx, 1);
        return {recipes: updatedRecipes};
      }

      return {recipes: state.recipes};
    });
  },
  selectRecipe: recipe => {
    set(state => {
      const updatedSelectedRecipes = state.selectedRecipes;
      updatedSelectedRecipes.set(recipe.id, recipe);
      return {selectedRecipes: updatedSelectedRecipes};
    });
  },
  unselectRecipe: recipeId => {
    set(state => {
      if (state.selectedRecipes.has(recipeId)) {
        const updatedSelectedRecipes = state.selectedRecipes;
        updatedSelectedRecipes.delete(recipeId);
        return {selectedRecipes: updatedSelectedRecipes};
      }

      return {selectedRecipes: state.selectedRecipes};
    });
  },
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
    const recipeId = await createRecipe(newRecipe);
    newRecipe.id = recipeId;
    set(state => ({recipes: [...state.recipes, newRecipe]}));
  },
}));
