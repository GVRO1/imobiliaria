CREATE TABLE Usuario (
idUsuario int PRIMARY KEY,
NomeUsuario varchar(50),
CPF char(11),
Senha varchar(20),
Email varchar(45),
comprador char(1),
Vendedor char(1),
comissao int);

CREATE TABLE imoveis (
idImovel int PRIMARY KEY,
endereco varchar(30),
nomeImovel varchar(30),
preco int,
fkUsuario int,
FOREIGN KEY(fkUsuario) REFERENCES Usuario (idUsuario)
)

