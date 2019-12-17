var tipo = ""
var negocio_busca =""
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
function cadastrar_imovel() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    var tipos = {
        tipo: tipo.value,
        negocio: negocio_busca.value,
        nomeImovel : titulo.value,
		preco : preco.value,
		descricao: descricao.value,
		tamanho: tamanho.value,
    };
    console.log("tipos",tipos);
    //Vai até o caminho usuario/cadastrar
    fetch("/leituras/cadastrar_imoveis", {
        method: "POST",
        body: formulario,
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
            window.location.href='login.html';

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
