'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		//nome das colunas
		idEventos: {
			field:"idEventos",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		luminosidade_externa: {
			field:"luminosidade_externa",
			type: DataTypes.REAL,
			allowNull: false
		},
		Hora: {
			field:"Hora",
			type: DataTypes.DATE,
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		//Nome da tabela
		tableName: 'Eventos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
