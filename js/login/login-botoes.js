const btnSairSetores = document.getElementById('botao-sair-setores')
const btnSetorComercial = document.getElementById('card-setor-comercial')

btnSairSetores.addEventListener('click', () =>{

moverTelaLogin()
removerUsuarioAtivo()


})
btnSetorComercial.addEventListener('click', () => {

    moverPlataformaComercial()
})