var endereco = [] ;
var nomeImovel = [];
var preco = [];
var descricao = [] ;
var tamanho = [];
var tipo = [] ;
var negocio = [];
if(sessionStorage.login_usuario_meuapp.length == 0){
    com_login.style.display = 'none';
    }
    else{
        com_login.style.display = 'block';
        var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
        usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
    }
function fore(){




fetch('/leituras/imoveis', {cache:'no-store'}).then(function (response) {
    if (response.ok) {
        response.json().then(function (resposta) {
            

            resposta.reverse();
            
            resultado.innerHTML = " "
            for (i = 0; i < resposta.length; i++) {
                var registro = resposta[i];
                // aqui, após registro. use os nomes 
                // dos atributos que vem no JSON 
                // que gerou na consulta ao banco de dados
                
                endereco.push(registro.endereco);
                nomeImovel.push(registro.nomeImovel);
                preco.push(registro.preco);
                descricao.push(registro.descricao);
                tamanho.push(registro.tamanho);
                tipo.push(registro.tipo);
                negocio.push(registro.negocio);
            
                resultado.innerHTML += `
                <div class="imovel">
                            <img class="foto" src="../fotos/imovel1.jpeg" alt="">
                        <span class="preco">R$${preco[i]},00</span> <span class="mes">/mês</span>
                        <span class="descricao">${descricao[i]}</span>
                        <span class="tamanho">${tamanho[i]} m²</span>
                        <span class="localizacao">${endereco[i]}</span>
                        <span class="tipo">${tipo[i]}</span>
                        <span class="negocio">${negocio[i]}</span>

                    </div>
                                        `;
            }

        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
});

}