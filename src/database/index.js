import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';

import User from '../app/models/User';

const models = [];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    if (process.env.NODE_ENV === 'test') {
      this.connection = new Sequelize(dataBaseConfig);
    } else {
      this.connection = new Sequelize(process.env.DB_URL, dataBaseConfig);
    }

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new DataBase();
