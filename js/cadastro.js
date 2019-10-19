function verifica_nome(){
    var tamanho = nome_completo.lenght 
    if(tamanho >= 5){
     document.getElementById('nome_completo').className = 'nome_completo_verde';
        alert("batat")
    }

function verificar_nome(){
    if (nome_completo.value.length > 5){
        alert("teste");
        nome_completo.style.border = '2px solid rgb(8, 177, 22)'
    }
}
function verificar_email(){
    if(email_cadastro.value.indexOf("@") > 0 && (email_cadastro.value.endsWith(".com")||email_cadastro.value.endsWith(".com.br") ) ) {
        alert("teste");
        email_cadastro.style.border = '2px solid rgb(8, 177, 22)'
    }
}
function function_mostrar_senha(){
    if(mostrar_senha.value = true){
        senha_cadastro.type = 'text';
        mostrar_senha.onclick = 'function_esconder_senha';
    }   
    else{
        senha_cadastro.type = 'password';
    }
}
function function_esconder_senha(){
    if(mostrar_senha.value = false){
        senha_cadastro.type = 'password';
        mostrar_senha.onclick = 'function_mostar_senha';
    }

}