
var nome = 0;
var email = 0;
var telefone = 0;
var mensagem = 0;


function verificar_nome(){
var tamanho = nome_contato.value.length;
if(tamanho >= 5){
        if(!(nome_contato.value.startsWith(" ")) && !(nome_contato.value.endsWith(" ")) && nome_contato.value.indexOf(" ") > 0){        
            document.getElementById('nome_contato').className = 'correto';
            mensagem_nome.innerHTML = "OK";
            mensagem_nome.style.color = 'green';
            nome = 1;
        }
        else{
            document.getElementById('nome_contato').className = 'errado';
            nome = 0;
        }
    }
    else{
        document.getElementById('nome_contato').className = 'errado';
        mensagem_nome.innerHTML = "Nome Completo ";
        mensagem_nome.style.color = 'red'; 
        nome = 0;

    }
    // mensagens de erro
    if(nome_contato.value.endsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no final";
     mensagem_nome.style.color = 'red';
     nome = 0;

    }
    if(nome_contato.value.startsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no começo";
     mensagem_nome.style.color = 'red';
     nome = 0;
    }
    
    if(nome_contato.value.indexOf(" ")< 0){
        mensagem_nome.innerHTML = "Nome Completo";
        mensagem_nome.style.color = 'red';
        nome = 0;
    }
    validar_botao()
}
function verificar_email(){
    if(email_contato.value.indexOf("@") > 0 && (email_contato.value.endsWith(".com") || email_contato.value.endsWith(".br"))){
        document.getElementById('email_contato').className = 'correto';
        mensagem_email.innerHTML = "OK";
        mensagem_email.style.color = 'green';
        email = 1;
    }
    else{
        document.getElementById('email_contato').className = 'errado';
        email = 0;
    }
//Mensagens de erro
if(email_contato.value.indexOf("@") < 0){
    mensagem_email.innerHTML = "Seu e-mail deve conter '@' ";
    mensagem_email.style.color = 'red';
    email = 0;
}
if(!(email_contato.value.endsWith(".com")) && !(email_contato.value.endsWith(".br"))){
    mensagem_email.innerHTML = "Seu e-mail deve terminar com '.com' ou '.br' ";
    mensagem_email.style.color = 'red';
    email = 0;
}

if(email_contato.value.endsWith("@.com.br") || email_contato.value.endsWith("@.br") || email_contato.value.endsWith("@.com")){
    mensagem_email.innerHTML = "Qual o servidor? Ex: hotmail; gmail; globo; etc";
    mensagem_email.style.color = 'red';
    document.getElementById('email_contato').className = 'errado';
    email = 0;
}
if(email_contato.value.endsWith(" ")){
    mensagem_email.innerHTML = "Seu email tem um espaço a mais no final";
    mensagem_email.style.color = 'red';
    document.getElementById('email_contato').className = 'errado';
    email = 0;
}
   if(email_contato.value.startsWith(" ")){
    mensagem_email.innerHTML = "Seu email tem um espaço a mais no começo";
    mensagem_email.style.color = 'red';
    document.getElementById('email_contato').className = 'errado';
    email = 0;
}
validar_botao()
}

// Mascará de input
//     let textoAjustado;
//     if(isCelular) {
//         const parte1 = textoAtual.slice(0,5);
//         const parte2 = textoAtual.slice(5,9);
//         textoAjustado = `${parte1}-${parte2}`        
//     } else {
//         const parte1 = textoAtual.slice(0,4);
//         const parte2 = textoAtual.slice(4,8);
//         textoAjustado = `${parte1}-${parte2}`
//     }

//     telefone.value = textoAjustado;
// }
function colocar_mascara(){
var tamanho = telefone_contato.value.length;
 
 console.log("tamanho",tamanho)
if(tamanho == 11){
 var ddd = telefone_contato.value.slice(0,2);
 var parte1 = telefone_contato.value.slice(2,7)
 var parte2 = telefone_contato.value.slice(7,12)
    document.getElementById("telefone_contato").className ='correto';
    telefone_contato.value = `(${ddd})${parte1}-${parte2}`
    mensagem_telefone.innerHTML = "OK";
    mensagem_telefone.style.color = 'green';
    telefone = 1
}
else if(tamanho == 10){
    var ddd = telefone_contato.value.slice(0,2);
    var parte1 = telefone_contato.value.slice(2,6)
    var parte2 = telefone_contato.value.slice(6,11)
    document.getElementById("telefone_contato").className ='correto';
    telefone_contato.value = `(${ddd})${parte1}-${parte2}`
    mensagem_telefone.innerHTML = "OK";
    mensagem_telefone.style.color = 'green';

    telefone = 1;
}
else{
    document.getElementById("telefone_contato").className = 'errado';
    mensagem_telefone.innerHTML = "Digite seu numero completo com o DDD";
    mensagem_telefone.style.color = 'red';
    telefone = 0;
}
if(telefone_contato.value == ""){
    document.getElementById("telefone_contato").className = 'input_normal';
    mensagem_telefone.innerHTML = "";

}
validar_botao()
}
function arrancar_mascara(){
    var tamanho = telefone_contato.value.length;
   if(tamanho == 13){
        var ddd = telefone_contato.value.slice(1,3);
        var parte1 = telefone_contato.value.slice(4,8)
        var parte2 = telefone_contato.value.slice(9,15)
        telefone_contato.value = `${ddd}${parte1}${parte2}`
        document.getElementById("telefone_contato").className ='correto';
        telefone = 1;

   }
   if(tamanho == 14){
   
   var ddd_2 = telefone_contato.value.slice(1,3);
   var parte1_2 = telefone_contato.value.slice(4,9)
   var parte2_2 = telefone_contato.value.slice(10,15)
      telefone_contato.value = `${ddd_2}${parte1_2}${parte2_2}`
      document.getElementById("telefone_contato").className ='correto';
      telefone = 1;

  }
  validar_botao()
   }

function verificar_mensagem(){
    
    var tamanho = Number(mensagem_contato.value.length)
    var faltam = 300 - tamanho;
    caracteres_restantes.innerHTML = `Caracteres restantes: ${faltam}`
    if(tamanho < 15){
        document.getElementById("mensagem_contato").className = 'errado'
        mensagem_mensagem.innerHTML = "Sua mensagem deve conter mais de 15 caracteres";
        mensagem_mensagem.style.color = "red";
        mensagem = 0
    }
    else{
        document.getElementById("mensagem_contato").className = 'correto'
        mensagem_mensagem.innerHTML = "OK";
        mensagem_mensagem.style.color = "green";
        mensagem = 1;
    }
    validar_botao()
}

function validar_botao(){
if(nome == 1 && mensagem == 1 && email == 1 ){
    document.getElementById("enviar_mensagem").className = `btn_enviar_contato_funcionando`;
    document.getElementById("enviar_mensagem").setAttribute("onclick","botao_enviar()");
}
else{
    document.getElementById("enviar_mensagem").className = `btn_enviar_contato`;
    document.getElementById("enviar_mensagem").setAttribute("onclick","");

}
}

function botao_enviar(){
    document.getElementById('notificacao_cadastro').className = 'correto';
    text_notificacao_email.innerHTML = `${email_cadastro.value}`
}

if(sessionStorage.login_usuario_meuapp.length == 0){
    com_login.style.display = 'none';
    }
    else{
        com_login.style.display = 'block';
        var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
        usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
    }