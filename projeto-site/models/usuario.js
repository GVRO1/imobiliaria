'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		//Nome do campo
		idUsuario: {
			//Quando der erro colocar esse field
			field: "idUsuario",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeUsuario: {
			field: "nomeUsuario",
			type: DataTypes.STRING,
			allowNull: false
		},
		Senha: {
			field: "Senha",
			type: DataTypes.STRING,
			allowNull: false
		},
		CPF: {
			field: "CPF",
			type: DataTypes.STRING,
			allowNull: true //Permitido nulo
		},
		Email: {
			field: "Email",
			type: DataTypes.STRING,
			allowNull: false
		},
		comprador: {
			field: "comprador",
			type: DataTypes.STRING,
			allowNull: true
		},
		Vendedor: {
			field: "Vendedor",
			type: DataTypes.STRING,
			allowNull: true
		},
		comissao: {
			field: "comissao",
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		//nome da tabela
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;	
};
