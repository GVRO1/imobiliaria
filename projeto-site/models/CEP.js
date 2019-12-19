'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let cep = sequelize.define('cep',{
		//Nome do campo
		idCEP: {
			//Quando der erro colocar esse field
			field: "idCEP",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		cidade: {
			field: "cidade",
			type: DataTypes.STRING,
			allowNull: false
		},
		bairro: {
			field: "bairro",
			type: DataTypes.STRING,
			allowNull: false
		},
		rua: {
			field: "rua",
			type: DataTypes.STRING,
			allowNull: false //Não Permitido nulo
		},
		numero: {
			field: "numero",
			type: DataTypes.INTEGER,
			allowNull: false //Não Permitido nulo
		},
		complemento: {
			field: "complemento",
			type: DataTypes.STRING,
			allowNull: false
		},
		fkimovel: {
			field: "fkimovel",
			type: DataTypes.STRING,
			allowNull: false
		},
		estado: {
			field: "estado",
			type: DataTypes.STRING,
			allowNull: false
		},
		nCEP: {
			field: "nCEP",
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		//nome da tabela
		tableName: 'CEP', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return cep;	
};
