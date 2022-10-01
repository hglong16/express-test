const users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

const messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

export default {
  users,
  messages,
};

// ╭──────────────────────────────────────────────────────────╮
// │asdf
// │
// ╰──────────────────────────────────────────────────────────╯
// import Sequelize from 'sequelize';
// import getUserModel from './user';
// import getMessageModel from './message';
//
// const sequelize = new Sequelize(
//   process.env.DATABASE,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//     dialect: 'postgres',
//   },
// );
//
// const models = {
//   User: getUserModel(sequelize, Sequelize),
//   Message: getMessageModel(sequelize, Sequelize),
// };
//
// Object.keys(models).forEach((key) => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });
//
// export { sequelize };
// export default models;
