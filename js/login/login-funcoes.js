function inserirDadosUsuario(){

    const login = document.getElementById('input-usuario-login')
    const senha = document.getElementById('input-senha-login')

    usuario.login = login.value
    usuario.senha = senha.value


}
function resetarTagAuntenticacao(){

    
    const icone = document.getElementById('icone-autenticacao')
    const texto = document.getElementById('texto-autenticacao')
    const titulo = document.getElementById('titulo-autenticacao')

    icone.className = ''
    titulo.className = ""
    titulo.classList.add("text-title","color-third")
    icone.classList.add('bi', 'bi-arrow-clockwise', 'color-third', 'icon-extra', 'loading')
    texto.textContent = "Verificando suas credenciais… "
    
}
function autenticacaoSucesso(){

    const icone = document.getElementById('icone-autenticacao')
    const texto = document.getElementById('texto-autenticacao')
    const titulo = document.getElementById('titulo-autenticacao')


    icone.classList.remove('bi', 'bi-arrow-clockwise', 'color-third', 'icon-extra', 'loading')
    icone.classList.add('bi', 'bi-check-circle', 'color-green','icon-extra')
    texto.textContent = "Usuario autenticado com sucesso. Acessando a seleção de setores."
    titulo.classList.remove('color-third')
    titulo.classList.add('color-green')
    titulo.textContent = "Autenticado"

}
function autenticacaoFalha(){

    const icone = document.getElementById('icone-autenticacao')
    const texto = document.getElementById('texto-autenticacao')
    const titulo = document.getElementById('titulo-autenticacao')


    icone.classList.remove('bi', 'bi-arrow-clockwise', 'color-third', 'icon-extra', 'loading')
    icone.classList.add('bi', 'bi-x-circle', 'color-red','icon-extra')
    texto.textContent = "Informações de credenciais incorretas. Faça login novamente."
    titulo.classList.remove('color-third')
    titulo.classList.add('color-red')
    titulo.textContent = "Não autenticado"


}
function timer2s() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
function moverTelaSetores(){

    const telaLogin = document.getElementById('screen-login')
    const telaAuntenticacao = document.getElementById('screen-autenticacao')
    const telaSetores = document.getElementById('screen-setores')

    telaLogin.classList.add('hidden')
    telaAuntenticacao.classList.add('hidden')
    telaSetores.classList.remove('hidden')

}
function moverTelaLogin(){

    const telaLogin = document.getElementById('screen-login')
    const telaAuntenticacao = document.getElementById('screen-autenticacao')
    const telaSetores = document.getElementById('screen-setores')

    telaLogin.classList.remove('hidden')
    telaAuntenticacao.classList.add('hidden')
    telaSetores.classList.add('hidden')


}
function moverTelaAutenticacao(){

    const telaLogin = document.getElementById('screen-login')
    const telaAuntenticacao = document.getElementById('screen-autenticacao')
    const telaSetores = document.getElementById('screen-setores')

    telaLogin.classList.add('hidden')
    telaAuntenticacao.classList.remove('hidden')
    telaSetores.classList.add('hidden')


}
function inserirColaborador(colaborador){

    const textoColaborador = document.getElementById('colaborador-setor')

    textoColaborador.textContent = colaborador

}
function inserirCargo (cargo) {

    const comercial = document.getElementById('card-setor-comercial')
    const adminstrativo = document.getElementById('card-setor-adminstrativo')
    const financeiro = document.getElementById('card-setor-financeiro')
    const projetos = document.getElementById('card-setor-projetos')
    const posVendas = document.getElementById('card-setor-pos-vendas')

    if(cargo === "Representante de Vendas" || 
        cargo === "Closer" ||
        cargo === "Closer Temporário"
    ){

        adminstrativo.classList.add('hidden')
        financeiro.classList.add('hidden')
        projetos.classList.add('hidden')
        posVendas.classList.add('hidden')

        return
    }
     if(cargo === "Diretor Administrativo / Financeiro" ||
       cargo === "Desenvolvedor" ||
       cargo === "Diretor Comercial")
       {
        comercial.classList.remove('hidden')
        adminstrativo.classList.remove('hidden')
        financeiro.classList.remove('hidden')
        projetos.classList.remove('hidden')
        posVendas.classList.remove('hidden')

        return
    }


}
function removerUsuarioAtivo(){

    localStorage.removeItem('usuarioAtivo')
}
function limparCamposLogin(){

    const login = document.getElementById('input-usuario-login')
    const senha = document.getElementById('input-senha-login')

    login.value = ""
    senha.value = ""
}
function moverPlataformaComercial(){

     window.location.href = "plataforma.html"
}