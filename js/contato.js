function verificar_nome(){
var tamanho = nome_contato.value.length;
if(tamanho >= 5){
        if(!(nome_contato.value.startsWith(" ")) && !(nome_contato.value.endsWith(" ")) && nome_contato.value.indexOf(" ") > 0){        
            document.getElementById('nome_contato').className = 'correto';
            mensagem_nome.innerHTML = "OK";
            mensagem_nome.style.color = 'green';

        }
        else{
            document.getElementById('nome_contato').className = 'errado';
        }
    }
    else{
        document.getElementById('nome_contato').className = 'errado';
        mensagem_nome.innerHTML = "Nome Completo ";
        mensagem_nome.style.color = 'red';

    }
    // mensagens de erro
    if(nome_contato.value.endsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no final";
     mensagem_nome.style.color = 'red';

    }
    if(nome_contato.value.startsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no começo";
     mensagem_nome.style.color = 'red';
    }
    
    if(nome_contato.value.indexOf(" ")< 0){
        mensagem_nome.innerHTML = "Nome Completo";
        mensagem_nome.style.color = 'red';
    }
}
function verificar_email(){
    if(email_contato.value.indexOf("@") > 0 && (email_contato.value.endsWith(".com") || email_contato.value.endsWith(".br"))){
        document.getElementById('email_contato').className = 'correto';
        mensagem_email.innerHTML = "OK";
        mensagem_email.style.color = 'green';
    }
    else{
        document.getElementById('email_contato').className = 'errado';
    }
//Mensagens de erro
if(email_contato.value.indexOf("@") < 0){
    mensagem_email.innerHTML = "Seu e-mail deve conter '@' ";
    mensagem_email.style.color = 'red';
}
if(!(email_contato.value.endsWith(".com")) && !(email_contato.value.endsWith(".br"))){
    mensagem_email.innerHTML = "Seu e-mail deve terminar com '.com' ou '.br' ";
    mensagem_email.style.color = 'red';
}

if(email_contato.value.endsWith("@.com.br") || email_contato.value.endsWith("@.br") || email_contato.value.endsWith("@.com")){
    mensagem_email.innerHTML = "Qual o servidor? Ex: hotmail; gmail; globo; etc";
    mensagem_email.style.color = 'red';
    document.getElementById('email_contato').className = 'errado';
}
if(email_contato.value.endsWith(" ")){
    mensagem_email.innerHTML = "Seu email tem um espaço a mais no final";
    mensagem_email.style.color = 'red';
    document.getElementById('email_contato').className = 'errado';
   }
   if(email_contato.value.startsWith(" ")){
    mensagem_email.innerHTML = "Seu email tem um espaço a mais no começo";
    mensagem_email.style.color = 'red';
    document.getElementById('email_contato').className = 'errado';
   }

}
function verificar_telefone(){
if
}
