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
		nome_cliente: {
			field: "nome_cliente",
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: "senha",
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		//nome da tabela
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
