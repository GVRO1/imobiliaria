function btn_comprar(){
    id_btn_comprar.classList = "btn_comprar_selecionado";
    id_btn_alugar.classList.remove("btn_alugar_selecionado");

    
}
function btn_alugar(){
    id_btn_alugar.classList = "btn_alugar_selecionado";
    id_btn_comprar.classList.remove("btn_comprar_selecionado");

}
function buscar(){
    alert("Botão buscar funcionando");
}
