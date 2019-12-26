var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var imoveis = require('../models').imoveis;
var cep = require('../models').cep;

/* Recuperar as últimas N leituras */
router.get('/imoveis', function(req, res, next) {
	
	const instrucaoSql = `select max(idImovel) as "maximo" from imoveis`;

	sequelize.query(instrucaoSql, {
		model: imoveis,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});

// tempo real (último valor de cada leitura)
router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando as últimas leituras`);

	const instrucaoSql = `select top 1 temperatura, umidade from leitura order by id desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});



/* Cadastrar usuário */
router.post('/cadastrar_imoveis', function(req, res, next) {
	console.log('Criando um usuário');
	
	imoveis.create({
		nomeImovel : req.body.nomeImovel,
		preco : req.body.preco,
		descricao: req.body.descricao,
		tamanho: req.body.tamanho,
		tipo: req.body.tipo,
		negocio:req.body.negocio,
		fkUsuario: req.body.fkUsuario // isso pega a informação no cache do navegador para cadastrar no usuario
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});

	cep.create({
		cidade : req.body.cidade,
		bairro : req.body.bairro,
		rua: req.body.rua,
		complemento: req.body.complemento,
		numero: req.body.numero,	
		estado:req.body.estado,
		nCEP:req.body.nCEP,
		fkimovel:req.body.fkImovel
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});





router.post('/busca', function(req, res, next) {
	
	// console.log('R E Q: ', req.body);
	var dados = req.body;
	var precoQuery = '';
	var cidadeQuery = '';
	var estadoQuery = '';
	var negocioQuery = '';

	if(dados.maximo_valor == '' && dados.minimo_valor == '' ){	
	precoQuery = '';
	}
	else if(dados.maximo_valor == ''){
		precoQuery = `AND preco <= ${dados.maximo_valor}`;	
	}
	else if(dados.minimo_valor == ''){
		precoQuery = `AND preco >= ${dados.minimo_valor}`;	
	}
	else{
		precoQuery = `AND preco >= ${dados.minimo_valor} AND preco <= ${dados.maximo_valor}`
	}


	if(dados.cidade == 'Indiferente'){
		cidadeQuery = ''
	}
	else{
		cidadeQuery = `AND cidade = '${dados.cidade}'`
	}


	if(dados.estado == 'Indiferente'){
		estadoQuery = ''
	}
	else{
		estadoQuery = `AND estado = '${dados.estado}'`
	}


	if(dados.tipoImovel == 'Indiferente'){
		tipoQuery = ''
	}
	else{
		tipoQuery = `AND tipo = '${dados.tipoImovel}'`
	}

	if(dados.negocio_busca == 'Indiferente'){
	negocioQuery = ''
	}
	else{
		negocioQuery = `AND negocio = '${dados.negocio_busca}' `
	}

	var instrucaoSql = `SELECT * FROM imoveis, CEP 
						WHERE fkimovel = idImovel
						${cidadeQuery} 
						${estadoQuery}
						${tipoQuery}
						${precoQuery}
						${negocioQuery};`;

	// Aqui nós nos conectamos ao banco e enviamos uma Query (busca) á ele e
	// esperamos o retorno disso.
	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.send(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});

// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from leitura`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});

// Parte do Upload de imagens

var express = require('express')
var multer  = require('multer')
var router = express.Router();   

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, '../uploads')
	},
	filename: function (req, file, cb) {
		var ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
		// pega a extensão do nome original e guarda na variavel ext
	  cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
	}
  })

  var upload = multer({ storage: storage })
  //Onde seus arquivos vão ser colocados
router.post('/file', upload.single('arquivo'), function(req,res,next){
    //single = por causa que é só um arquivo
    // e o 'arquivo' é por causa que o name do input file é arquivo
	console.log(req.file);
	
					//É Aqui onde eu coloco no banco de dados


})	

module.exports = router;
