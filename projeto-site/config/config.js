module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  //Colocar os nossos dados
  production: {
    username: 'rodriguesimobi',
    password: 'Puribaby2!',
    database: 'rodriguesimobi',
    host: 'rodriguesimobi.mysql.dbaas.com.br',
  //
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};