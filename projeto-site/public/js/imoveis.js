var cidade = [];
var estado = [];
var nomeImovel = [];
var preco = [];
var descricao = [];
var tamanho = [];
var tipo = [];
var negocio = [];
var imagem = [];
var negocio_busca = 'Indiferente';
fore();
if (sessionStorage.login_usuario_meuapp.length == 0) {
    com_login.style.display = 'none';
}
else {
    com_login.style.display = 'block';
    var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
    usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
}
function btn_comprar(){
    id_btn_comprar.classList = "btn_comprar_selecionado";
    id_btn_alugar.classList.remove("btn_alugar_selecionado");
    negocio_busca = 'comprar';
    console.log(negocio_busca);
    
}
function btn_alugar(){
    id_btn_alugar.classList = "btn_alugar_selecionado";
    id_btn_comprar.classList.remove("btn_comprar_selecionado");
    negocio_busca = 'alugar';
    console.log(negocio_busca);
}
function fore() {

    var busca = {
        tipoImovel: subfiltro_tipo.value,
        minimo_valor: minimo.value,
        maximo_valor: maximo.value,
        cidade: subfiltro_localizacao_cidade.value,
        estado: subfiltro_localizacao_estado.value,
        negocio_busca: negocio_busca,
    };
    console.log("busca",busca);

    // var meuJson = { variavel_1: 'xpto', variavel_2: 'abcd' };

    fetch(`/leituras/busca/`, { 
        cache: 'no-store',
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // O "body" (corpo - em inglês) é responsável 
        // por enviar todos os nossos parâmetros ao back-end
        // para que possamos utilizá-los no servidor.
        body: JSON.stringify(busca),
    }).then(async function (response) {
        // console.log('response', response)
        if (response.ok) {
            // console.log('response', response);
            // console.log('JSON.parse(response)', JSON.parse(response));
            // response.json().then(function (resposta) {
                // console.log('resposta', resposta);
                var resposta = await response.json();
                if(resposta.length >= 1){
                    resposta.reverse();
                cidade = [];
                nomeImovel = [];
                preco = [];
                descricao = [];
                tamanho = [];
                tipo = [];
                negocio = [];
                resultado.innerHTML = " "
                imagem = [];
                for (i = 0; i < resposta.length; i++) {
                    var registro = resposta[i];
                    // aqui, após registro. use os nomes 
                    // dos atributos que vem no JSON 
                    // que gerou na consulta ao banco de dados

                    cidade.push(registro.cidade);
                    estado.push(registro.estado);
                    nomeImovel.push(registro.nomeImovel);
                    preco.push(registro.preco);
                    descricao.push(registro.descricao);
                    tamanho.push(registro.tamanho);
                    tipo.push(registro.tipo);
                    negocio.push(registro.negocio);
                    imagem.push(registro.imagem);

                    resultado.innerHTML += `
                    <div class="imovel">
                            <img class="foto" src="${imagem[i]}" alt="">
                        <span class="preco">R$${preco[i]},00</span> <span class="mes">/mês</span>
                        <span class="descricao">${descricao[i]}</span>
                        <span class="tamanho">${tamanho[i]} m²</span>
                        <span class="localizacao">${cidade[i]},${estado[i]}</span>
                        <span class="tipo">${tipo[i]}</span>
                        <span class="negocio">${negocio[i]}</span>

                    </div>
                                        `;
                    }
                    tamanho_resultado.innerHTML = ` <span id="numero_resultado">${negocio.length}</span> Imóveis disponiveis`;

                }else{
                    alert('Não há resultados ...');
                }

            // });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}