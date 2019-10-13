function cadastro(){
   var nome_completo_guardado = nome_completo.value;
   var email_guardado = email_cadastro.value;
   var senha_cadastro_guardado = senha_cadastro.value;
   var senha_confirmar_guardado = senha_confirmar.value;

    
    if(senha_cadastro_guardado == senha_confirmar_guardado){
        alert('Senhas iguais')
        alert(`Nome:${nome_completo_guardado} E-mail:${email_guardado} Senha:${senha_cadastro_guardado}`)
    }
    else{
        alert('Senhas diferentes')
    }
}