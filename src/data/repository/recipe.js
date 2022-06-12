import {getAll, create} from '../db';
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
  recipeValues.unshift(uuidv4());
  recipeValues.push(new Date().toISOString());
  recipeValues.push(new Date().toISOString());
  await create(tableName, tableColumns, recipeValues);
};
