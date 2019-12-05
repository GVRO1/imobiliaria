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
if(sessionStorage.login_usuario_meuapp.length == 0){
com_login.style.display = 'none';
}
else{
    com_login.style.display = 'block';
    var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
    usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
}
    // console.log(sessionStorage.login_usuario_meuapp);
    // console.log(nomeSobrenome);
    // console.log(sessionStorage.nome_usuario_meuapp);
    // console.log(sessionStorage.senha_usuario_meuapp);
