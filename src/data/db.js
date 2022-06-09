import SQLite from 'react-native-sqlite-storage';
import * as schema from './schema';

SQLite.enablePromise(true);
let db = null;

export const initDB = async () => {
  try {
    db = await SQLite.openDatabase({
      name: 'recipeia',
      location: 'default',
    });

    try {
      await db.executeSql('SELECT 1 FROM Recipe LIMIT 1');
      return db;
    } catch (err) {
      return db
        .transaction(tx => {
          for (const tableName in schema.Tables) {
            createTable(tx, schema.Tables[tableName], tableName);
          }
        })
        .then(() => db)
        .catch(() => {
          throw new Error(`Unable to initialize tables || ${err}`);
        });
    }
  } catch (err) {
    throw new Error(`Unable to open database || ${err}`);
  }
};

const createTable = async (tx, table, tableName) => {
  let sql = `CREATE TABLE IF NOT EXISTS ${tableName}`;
  const createColumns = [];
  for (const key in table) {
    createColumns.push(
      `${key} ${table[key].type.type} ${
        table[key].primaryKey ? 'PRIMARY KEY NOT NULL' : ''
      } default ${table[key].defaultValue}`,
    );
  }
  sql += `(${createColumns.join(', ')});`;
  await tx.executeSql(sql);
};

export const getAll = async tableName => {
  return await db.executeSql(`SELECT * FROM ${tableName}`);
};
