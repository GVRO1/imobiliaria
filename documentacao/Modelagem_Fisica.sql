create database imobiliaria;
use imobiliaria;
CREATE TABLE Usuario (
idUsuario int PRIMARY KEY,
NomeUsuario varchar(45),
CPF char(11),
Senha varchar(20),
Email varchar(45),
Comprador char(1),
Vendedor char(1),
comissao int
);

CREATE TABLE imoveis (
idImovel int PRIMARY KEY,
endereco varchar(50),
nomeImovel varchar(50),
preco int,
idUsuario int,
FOREIGN KEY(idUsuario) REFERENCES Usuario (idUsuario),
FOREIGN KEY(idUsuario) REFERENCES Usuario (idUsuario)
)

