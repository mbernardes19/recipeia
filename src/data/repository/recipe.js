import {getAll} from '../db';

const tableName = 'Recipe';

export const loadRecipes = async () => {
  const all = await getAll(tableName);
  return all[0].rows.raw();
};
