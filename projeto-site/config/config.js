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
    username: 'root',
    password: 'bandtec',
    database: 'imobiliaria',
    host: '0.0.0.0',
    dialect: 'mysql',
    }
};
 
