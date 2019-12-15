'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let imoveis = sequelize.define('imoveis',{
		//Nome do campo
		idImovel: {
			//Quando der erro colocar esse field
			field: "idImovel",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeImovel: {
			field: "nomeImovel",
			type: DataTypes.STRING,
			allowNull: false
		},
		preco: {
			field: "preco",
			type: DataTypes.INTEGER,
			allowNull: false
		},
		fkUsuario: {
			field: "fkUsuario",
			type: DataTypes.STRING,
			allowNull: true //Permitido nulo
		},
		descricao: {
			field: "descricao",
			type: DataTypes.STRING,
			allowNull: false
		},
		tipo: {
			field: "tipo",
			type: DataTypes.STRING,
			allowNull: false
		},
		negocio: {
			field: "negocio",
			type: DataTypes.STRING,
			allowNull: true
		},
		imagem: {
			field: "imagem",
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		//nome da tabela
		tableName: 'imoveis', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return imoveis;	
};
