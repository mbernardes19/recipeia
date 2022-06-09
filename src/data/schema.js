export const Types = {
  INTEGER: {
    value: 'INTEGER',
    type: 'INTEGER',
  },
  TEXT: {
    value: 'TEXT',
    type: 'TEXT',
  },
  DATETIME: {
    value: 'DATETIME',
    type: 'TEXT',
  },
};

export const Tables = {
  Recipe: {
    id: {
      type: Types.TEXT,
      primaryKey: true,
      defaultValue: null,
    },
    title: {
      type: Types.TEXT,
      primaryKey: false,
      defaultValue: false,
    },
    image: {
      type: Types.TEXT,
      primaryKey: false,
      defaultValue: false,
    },
    ingredients: {
      type: Types.TEXT,
      primaryKey: false,
      defaultValue: false,
    },
    instructions: {
      type: Types.TEXT,
      primaryKey: false,
      defaultValue: false,
    },
    created: {
      type: Types.DATETIME,
      primaryKey: false,
      defaultValue: new Date().toISOString(),
    },
    updated: {
      type: Types.DATETIME,
      primaryKey: false,
      defaultValue: new Date().toISOString(),
    },
  },
};
