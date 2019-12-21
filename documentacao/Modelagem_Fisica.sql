create database imobiliaria;
use imobiliaria;
CREATE TABLE Usuario (
idUsuario int PRIMARY KEY auto_increment,
NomeUsuario varchar(50),
CPF char(11),
Senha varchar(20),
Email varchar(45),
comprador char(1),
Vendedor char(1),
comissao int);
insert into usuario values (null,'Gabriel Vieira Rodrigues de Oliveira',null,'123456','gabrieloliveirarodrigues01@hotmail.com',null,null,null);

CREATE TABLE imoveis (
             idImovel int PRIMARY KEY auto_increment,
			nomeImovel varchar(30),	
            preco int,
            tamanho int,
                tipo varchar(15),
                negocio varchar(10),
               descricao varchar(300),
                    imagem varchar(40),
                   fkUsuario int,
FOREIGN KEY(fkUsuario) REFERENCES Usuario (idUsuario)
);

insert into imoveis values(null,"Casa Itapecerica",1000,75,"Residencial","Alugar","Residencia no Centro de Itapecerica da Serra, Quarto e cozinha com armários, banheira, lareira, excelente localização, em frente ao Supermercado Bandeira.Não aceita animal de estimação.Casa nos fundos.","../fotos/imoveis/casa_itapecerica.jpg",1),
	(null,"Sala Comercial",1000,42,"Comercial","Alugar","Sala comercial no centro de Itapecerica da Serra, com uma vaga de estacionamento.","../fotos/imoveis/sala_Itapecerica.jpg",1),
	(null,"Terreno Comercial",2000,245,"Terreno","Alugar","Terreno comercial próximo ao Centro Empresarial de São Paulo","../fotos/imoveis/terreno_sao_paulo.jpg",1),
	(null,"Casa comercial",2000,200,"Comercial","Alugar","Casa comercial no centro de Itapecerica da Serra","../fotos/imoveis/imovel_comercial_itapecerica.jpg",1);
create table CEP (idCEP	int auto_increment,
 nCEP varchar(10),
 cidade varchar(30),
 bairro varchar(30),
 rua varchar(40),
 numero int,
 complemento varchar(50),
 fkimovel int,
 estado char(2),
 primary key (idCEP,nCEP),
 FOREIGN KEY(fkimovel) REFERENCES imoveis (idImovel)
 );
insert into CEP values (null,"?????","Itapecerica",null,null,null,null,1,"SP"),
(null,"?????","Itapecerica",null,null,null,null,2,"SP"),
(null,"?????","São Paulo",null,null,null,null,3,"SP"),
(null,"?????","Itapecerica",null,null,null,null,4,"SP");
