function limpezaCamposLancamento(){

const nome = document.getElementById('input-cliente-lancamento')
const cpf = document.getElementById('input-cpf-lancamento')
const contato = document.getElementById('input-contato-lancamento')
const rg = document.getElementById('input-rg-lancamento')
const email = document.getElementById('input-e-mail-lancamento')
const cep = document.getElementById('input-cep-lancamento')
const rua = document.getElementById('input-rua-lancamento')
const bairro = document.getElementById('input-bairro-lancamento')
const numero = document.getElementById('input-numero-lancamento')
const cidade = document.getElementById('input-cidade-lancamento')
const uf = document.getElementById('input-estado-lancamento')
const numeroInstalacao = document.getElementById('input-numero-instalacao-lancamento')

const local = document.querySelector('.swipeLocal')
const localArea = document.getElementById('textarea-local')
const unificacao = document.querySelector('.swipeUnificacao')
const unificacaoArea = document.getElementById('textarea-unificacao')
const adequacao = document.querySelector('.swipeAdequacao')
const adequacaoArea = document.getElementById('textarea-adequacao')
const reforma = document.querySelector('.swipeReforma')
const reformaArea = document.getElementById('textarea-reforma')
const embutido = document.querySelector('.swipeEmbutido')
const embutidoArea = document.getElementById('textarea-embutido')
const rateio = document.querySelector('.swipeRateio')
const rateioArea = document.getElementById('textarea-rateio')

const sdr = document.getElementById('input-sdr-lancamento')
const closer = document.getElementById('input-closer-lancamento')
const bu = document.getElementById('input-bu-lancamento')
const canal = document.getElementById('input-canal-lancamento')

const concessionaria = document.getElementById('input-concessionaria-lancamento')
const unidade = document.getElementById('input-unidade-lancamento')
const observacao = document.getElementById('textarea-observacao')

nome.value = ""
cpf.value = ""
contato.value = ""
rg.value = ""
email.value = ""
cep.value = ""
rua.value = ""
bairro.value = ""
numero.value = ""
cidade.value = ""
uf.value = ""
numeroInstalacao.value = ""

local.disable
localArea.value = ""
unificacao.disable
unificacaoArea.value = ""
adequacao.disable
adequacaoArea.value = ""
reforma.disable
reformaArea.value = ""
embutido.disable
embutidoArea.value = ""
rateio.disable
rateioArea.value = ""


sdr.value = ""
closer.value = ""
bu.value = ""
canal.value = ""

concessionaria.value = ""
unidade.value = ""
observacao.value = ""


}