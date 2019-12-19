var tipo = ""
var negocio_busca =""
var fkUsuario = sessionStorage.id_usuario_meuapp;
if (sessionStorage.login_usuario_meuapp.length == 0) {
    com_login.style.display = 'none';
}else {
    com_login.style.display = 'block';
    var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
    usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
}
function comprar(){
    btn_comprar.classList = "btn_selecionado";
    btn_alugar.classList.remove("btn_selecionado");
    negocio_busca = 'comprar';
    console.log(negocio_busca)
    
}
function alugar(){
    btn_alugar.classList = "btn_selecionado";
    btn_comprar.classList.remove("btn_selecionado");
    negocio_busca = 'alugar';
    console.log(negocio_busca)

}

function residencial(){
    btn_residencial.classList = "btn_selecionado";
    btn_terreno.classList.remove("btn_selecionado");
    btn_comercial.classList.remove("btn_selecionado");
    tipo = 'residencial';
    console.log(tipo)

}
function comercial(){
    btn_comercial.classList = "btn_selecionado";
    btn_terreno.classList.remove("btn_selecionado");
    btn_residencial.classList.remove("btn_selecionado");
    tipo = 'comercial';
    console.log(tipo)

}
function terreno(){
    btn_terreno.classList = "btn_selecionado";
    btn_residencial.classList.remove("btn_selecionado");
    btn_comercial.classList.remove("btn_selecionado");
    tipo = 'terreno';
    console.log(tipo)
    
}
// Cadastro 
var maximo;
fetch('/leituras/imoveis', {cache:'no-store'}).then(function (response) {
    if (response.ok) {
        response.json().then(function (resposta) {
            
            resposta.reverse();

            for (i = 0; i < resposta.length; i++) {
                var registro = resposta[i];
                // aqui, após registro. use os nomes 
                // dos atributos que vem no JSON 
                // que gerou na consulta ao banco de dados

                maximo = registro.maximo
            }
            maximo += 1
        });
    } else {
        console.error('Nenhum dado encontrado ou erro na API');
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
});

console.log("maximo:",maximo)
function cadastrar_imovel() {
    var tipos = {
        tipo: tipo,
        negocio: negocio_busca,
        nomeImovel : titulo_imovel.value,
		preco : preco_imovel.value,
		descricao: mensagem_contato.value,
        tamanho: tamanho_imovel.value,

        cidade : inp_cidade.value,
        bairro : inp_bairro.value,
        rua: inp_rua.value,
        complemento: inp_complemento.value,
        numero: inp_numero.value,
        estado:inp_estado.value,
        nCEP:inp_cep.value,

        fkUsuario: fkUsuario,
        fkImovel: maximo
    };
    console.log("tipos",tipos);
    //Vai até o caminho usuario/cadastrar
    fetch("/leituras/cadastrar_imoveis", {
        // body: formulario,
        cache: 'no-store',
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // O "body" (corpo - em inglês) é responsável 
        // por enviar todos os nossos parâmetros ao back-end
        // para que possamos utilizá-los no servidor.

        body: JSON.stringify(tipos)
    }).then(function (response) {
        
        if (response.ok) {
            //Se der certo vai para pagina login.html
            window.location.href='imoveis.html';

        } else {
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                alert("erro")
            });
        }
        return false;
        
    });

    return false;    
}






