const Sequelize = require('sequelize')
// primeiro parametro é o nome do banco de dados
// segundo parametro é o nome do usuario
// terceiro paramtro é a senha
// quarto parametro é um json que dentro dele colocamos 
// host e identificamos aonde que o servidor está
const sequelize = new Sequelize ('teste','root','bandtec',{
    // Já que é um servidor local, chamamos de 'localhost'
    host:"localhost",
    // dialect serve para colocarmos qual a linguagem de banco de dados que iremos utilizar
    dialect: 'mysql'
})


sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})
Login.sync({force: true})

const Login = sequelize.define('usuarios',{ // Criou uma tabela com o nome usuario
    // Aqui dentro é definido as colunas que terão na tabela
    nome_completo:{
        type: Sequelize.STRING  //Define que o tipo é um string
    },
    email: {
        type: Sequelize.TEXT  // Define que o tipo é text
    }
})
