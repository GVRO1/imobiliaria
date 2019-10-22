
var senha_certa = 0;
function verifica_nome(){
    var tamanho = nome_completo.value.length;
    if(tamanho >= 5){
        if(!(nome_completo.value.startsWith(" ")) && !(nome_completo.value.endsWith(" ")) && nome_completo.value.indexOf(" ") > 0){        
            document.getElementById('nome_completo').className = 'correto';
            mensagem_nome.innerHTML = "OK";
            mensagem_nome.style.color = 'green';

        }
        else{
            document.getElementById('nome_completo').className = 'errado';
        }
    }
    else{
        document.getElementById('nome_completo').className = 'errado';
        mensagem_nome.innerHTML = "Nome Completo ";
        mensagem_nome.style.color = 'red';

    }
    // mensagens de erro
    if(nome_completo.value.endsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no final";
     mensagem_nome.style.color = 'red';

    }
    if(nome_completo.value.startsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no começo";
     mensagem_nome.style.color = 'red';
    }
    
    if(nome_completo.value.indexOf(" ")< 0){
        mensagem_nome.innerHTML = "Nome Completo";
        mensagem_nome.style.color = 'red';
    }

}

function verificar_email(){
    if(email_cadastro.value.indexOf("@") > 0 && (email_cadastro.value.endsWith(".com") || email_cadastro.value.endsWith(".br"))){
        document.getElementById('email_cadastro').className = 'correto';
    }
    else{
        document.getElementById('email_cadastro').className = 'errado';
    }

}

function verificar_senha(){
    var tamanho = senha_cadastro.value.length;
    if(tamanho > 5){
        document.getElementById('senha_cadastro').className = 'correto';
        senha_certa = 1;
    }
    else{
        document.getElementById('senha_cadastro').className = 'errado';
        senha_certa = 0 ;
    }
    if(senha_cadastro.value == senha_confirmar.value && senha_certa == 1){
        document.getElementById('senha_confirmar').className = 'correto';
    }
    else{
        document.getElementById('senha_confirmar').className = 'errado';
    }
}

function function_mostrar_senha(){
    if(mostrar_senha.checked == true){
        senha_cadastro.type = 'text';
        senha_confirmar.type = 'text';
    } else{
        senha_cadastro.type = 'password';
        senha_confirmar.type = 'password';

    }
}
