var tipo = ""
function comprar(){
    btn_comprar.classList = "btn_selecionado";
    btn_alugar.classList.remove("btn_selecionado");
    negocio_busca = 'comprar';
    
}
function alugar(){
    btn_alugar.classList = "btn_selecionado";
    btn_comprar.classList.remove("btn_selecionado");
    negocio_busca = 'alugar';
}

function residencial(){
    btn_residencial.classList = "btn_selecionado";
    btn_terreno.classList.remove("btn_selecionado");
    btn_comercial.classList.remove("btn_selecionado");
    tipo = residencial;
}
function comercial(){
    btn_comercial.classList = "btn_selecionado";
    btn_terreno.classList.remove("btn_selecionado");
    btn_residencial.classList.remove("btn_selecionado");
    tipo = comercial;

}
function terreno(){
    btn_terreno.classList = "btn_selecionado";
    btn_residencial.classList.remove("btn_selecionado");
    btn_comercial.classList.remove("btn_selecionado");
    tipo = terreno;

}
// Cadastro 
function cadastrar_imovel() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    //Vai até o caminho usuario/cadastrar
    fetch("/imoveis/cadastrar", {
        method: "POST",
        body: formulario
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