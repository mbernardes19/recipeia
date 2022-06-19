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
        .catch(er => {
          throw new Error(`Unable to initialize tables || ${er.message}`);
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

export const create = async (tableName, tableColumns, rows) => {
  await db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO ${tableName} (${tableColumns.join(', ')}) VALUES (${rows
        .map(row => `'${row}'`)
        .join(', ')})`,
    );
  });
};

export const remove = async (tableName, idColumn, id) => {
  await db.executeSql(`DELETE FROM ${tableName} WHERE ${idColumn} = '${id}'`);
};
