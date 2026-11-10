const botaoNovaProposta = document.getElementById('botao-lancamento-finalizacao-proposta')
const botaoDashboard = document.getElementById('botao-lancamento-finalizacao-dashboard')
const botaoHistorico = document.getElementById('botao-lancamento-finalizacao-historico')

botaoNovaProposta.addEventListener('click', ()=>{

    propostaSelecionado() 
    limpezaNovaProposta()

})
botaoDashboard.addEventListener('click', ()=>{

    dashboardSelecionado()
    limpezaNovaProposta()
})
botaoHistorico.addEventListener('click', ()=>{

    historicoSelecionado()
    limpezaNovaProposta()
})