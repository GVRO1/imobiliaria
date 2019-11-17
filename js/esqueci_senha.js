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