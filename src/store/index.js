import {useRecipeStore} from './recipe';

export const initStore = async () => {
  await useRecipeStore.getState().loadRecipesFromDB();
};
