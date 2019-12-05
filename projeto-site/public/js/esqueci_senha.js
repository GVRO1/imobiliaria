function enviar(){
    if(email.value.length > 5){
        if(email.value == "gabriel@hotmail.com"){
            notificacao.style.display = 'block';
            text_notificacao.innerHTML = `Um E-mail de confirmação foi enviado para ${email.value}`
            erro.style.display = "none"

        }
        else{
            erro.style.display = "block"
            notificacao.style.display = 'none';

        }
    }
    else{
        notificacao.style.display = 'none';
        erro.style.display = "none"

    }
}

if(sessionStorage.login_usuario_meuapp.length == 0){
    com_login.style.display = 'none';
    }
    else{
        com_login.style.display = 'block';
        var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
        usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
    }