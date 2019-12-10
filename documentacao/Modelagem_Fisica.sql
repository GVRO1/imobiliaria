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
idImovel int PRIMARY KEY identity(1,1) ,
endereco varchar(30),
nomeImovel varchar(30),
preco int,
fkUsuario int,
descricao varchar(300),
tamanho int

FOREIGN KEY(fkUsuario) REFERENCES UsuarioImobiliaria (idUsuario)
);

drop table imoveis;
select * from imoveis;
select * from UsuarioImobiliaria;
insert into imoveis values('Centro de Itapecerica da Serra','Casa Itapecerica',1000,1,'
Aluga-se

Residência no Centro de Itapecerica da Serra, Quarto e cozinha com armários, banheira, lareira, excelente localização, em frente ao Supermercado Bandeira.
Não aceita animal de estimação.
Casa nos fundos.
',75);
insert into imoveis values('Centro de Itapecerica da Serra','Sala Comercial',1000,1,'
Aluga se sala comercial no centro de Itapecerica da Serra,com uma vaga de estacionamento.
',42);
insert into imoveis values('Próximo ao Centro Empresarial','Terreno Comercial',2000,1,'
Aluga-se terreno comercial, Próximo ao Centro Empresarial de S.P
',245);
insert into imoveis values('Centro de Itapecerica da Serra','Casa comercial',2000,1,'
Aluga-se casa comercial no centro de Itapecerica da Serra
',200,'Comercial','Alugar');
select * from imoveis;
alter table imoveis add tipo varchar(30);
alter table imoveis add negocio varchar(30);
update imoveis set tipo = 'Residencial' where idImovel = 1;
update imoveis set tipo = 'Comercial' where idImovel = 2;
update imoveis set negocio = 'Alugar';

Aluga=se casa comercial

No centro de Itapecerica da Serra

Valor do aluguel 2,000.00 200m2