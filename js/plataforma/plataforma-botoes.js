const btnSair = document.getElementById('botao-sair-plataforma')

btnSair.addEventListener('click',(e) => {

    e.preventDefault()
    window.location.href = "index.html"
    localStorage.removeItem('usuarioAtivo')
})