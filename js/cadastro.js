
var senha_certa = 0;
function verifica_nome(){
    var tamanho = nome_completo.value.length;
    if(tamanho >= 5){
        if(!(nome_completo.value.startsWith(" ")) && !(nome_completo.value.endsWith(" ")) && nome_completo.value.indexOf(" ") > 0){        
            document.getElementById('nome_completo').className = 'correto';
        }
        else{
            document.getElementById('nome_completo').className = 'errado';
        }
    }
    else{
        document.getElementById('nome_completo').className = 'errado';
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
    if(mostrar_senha.value = true){
        senha_cadastro.type = 'text';
        senha_confirmar.type = 'text';
    }   
    else{
        senha_cadastro.type = 'password';
        senha_confirmar.type = 'password';

    }
}