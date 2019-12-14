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
}
function comercial(){
    btn_comercial.classList = "btn_selecionado";
    btn_terreno.classList.remove("btn_selecionado");
    btn_residencial.classList.remove("btn_selecionado");
}
function terreno(){
    btn_terreno.classList = "btn_selecionado";
    btn_residencial.classList.remove("btn_selecionado");
    btn_comercial.classList.remove("btn_selecionado");
}
