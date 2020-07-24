import Sequelize from 'sequelize';

class Database{
    constructor(){
        this.connect();
    }

    connect() {
      const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_CONNECTION,
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      });

      sequelize
        .authenticate()
        .then(() => {
          console.log('DB OK');
        })
        .catch(err => {
          console.error('DB Error:', err);
        });

    return sequelize;
    }
}

module.exports = new Database().connect;