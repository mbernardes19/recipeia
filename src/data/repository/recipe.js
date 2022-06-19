import {getAll, create, remove} from '../db';
import {Tables} from '../schema';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const tableName = 'Recipe';
const tableColumns = Object.keys(Tables.Recipe);

export const loadRecipes = async () => {
  const all = await getAll(tableName);
  return all[0].rows.raw();
};

export const createRecipe = async recipe => {
  const recipeValues = Object.values(recipe);
  const recipeId = uuidv4();
  recipeValues.unshift(recipeId);
  recipeValues.push(new Date().toISOString());
  recipeValues.push(new Date().toISOString());
  await create(tableName, tableColumns, recipeValues);
  return recipeId;
};

export const deleteRecipe = async recipeId => {
  await remove(tableName, 'id', recipeId);
};
