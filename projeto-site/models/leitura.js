'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let imoveis = sequelize.define('imoveis',{	
		//nome das colunas
		idImovel: {
			field:"idImovel",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		endereco: {
			field:"endereco",
			type: DataTypes.STRING,
			allowNull: false
		},
		nomeImovel: {
			field:"nomeImovel",
			type: DataTypes.STRING,
			allowNull: false
		},
		preco: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		fkUsuario: {
			field:"fkUsuario",
			type: DataTypes.INTEGER,
			allowNull: false
		},
		descricao: {
			field:"descricao",
			type: DataTypes.STRING,
			allowNull: false
		},
		tamanho: {
			field:"tamanho",
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tipo: {
			field:"tipo",
			type: DataTypes.STRING,
			allowNull: false
		},
		negocio: {
			field:"negocio",
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		//Nome da tabela
		tableName: 'imoveis', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return imoveis;
};
