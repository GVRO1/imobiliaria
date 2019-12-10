if(sessionStorage.login_usuario_meuapp.length == 0){
    com_login.style.display = 'none';
    }
    else{
        com_login.style.display = 'block';
        var nomeSobrenome = sessionStorage.nome_usuario_meuapp.split(" ");
        usuario.innerHTML = `${nomeSobrenome[0]} ${nomeSobrenome[nomeSobrenome.length - 1]}`;
    }
function fore(){
for(var i = 0 ; i < 3; i++){
    resultado.innerHTML += `
    <div class="imovel">
            <div >
                <img class="foto" src="../fotos/imovel1.jpeg" alt="">
            </div>
            <span class="preco"> R$ 200.000</span> <span class="mes">/mês</span>
            <span class="descricao">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam laudantium!</span>
            <span class="tamanho">tamanho</span>
            <span class="localizacao">localizacao</span>
            <span class="tipo">tipo</span>
        </div>
                            `;
}
}

