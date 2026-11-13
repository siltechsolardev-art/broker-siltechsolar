function limpezaCamposNegociacao(){

const valorNegociado = document.getElementById('valor-negociado-proposta')
const pagamento1 = document.getElementById('valor-pagamento-1')
const tipoPagamento1 = document.getElementById('forma-pagamento-1-negociacao')
const parcelas1 = document.getElementById('parcela-pagamento-1-negociacao')
const pagamento2 = document.getElementById('valor-pagamento-2')
const tipoPagamento2 = document.getElementById('forma-pagamento-2-negociacao')
const parcelas2 = document.getElementById('parcela-pagamento-2-negociacao')
const mcs = document.getElementById('mcs-negociacao')
const resultadoTexto = document.getElementById('texto-mcs-negociacao')
const resultadoIcone = document.getElementById('icone-resultado-negociacao')
const resultadoContainer = document.getElementById('container-item-analise')
const resultadoTitulo = document.getElementById('titulo-resultado-negociacao')



valorNegociado.value = ""
pagamento1.value = ""
tipoPagamento1.value = ""
parcelas1.value = ""
pagamento2.value = ""
tipoPagamento2.value = ""
parcelas2.value = ""
mcs.textContent = ""
resultadoTexto.classList.remove()
resultadoIcone.classList.remove()
resultadoContainer.classList.remove()
resultadoTitulo.classList.remove()

resultadoTexto.classList.add("text-title", "color-text-first")
resultadoIcone.classList.add("bi", "bi-emoji-expressionless", "icon-large", "color-text-first")
resultadoContainer.classList.add("container-card" , "background-gray")
resultadoTitulo.classList.add("text-title", "font-hard", "color-text-first")
resultadoTexto.textContent = "Aguardando"
}