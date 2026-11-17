    const inputCepLancamento = document.getElementById("input-cep-lancamento");
    const inputRuaLancamento = document.getElementById("input-rua-lancamento");
    const inputBairroLancamento = document.getElementById("input-bairro-lancamento");
    const inputCidadeLancamento = document.getElementById("input-cidade-lancamento");
    const inputEstadoLancamento = document.getElementById("input-estado-lancamento");
    
function carregarDadosLancamento(){

    const resumoQuantidadePlaca = document.getElementById('placas-resumo-lancamento')
    const resumoInversor = document.getElementById('inversor-resumo-lancamento')
    const resumoSistema = document.getElementById('sistema-resumo-lancamento')
    const resumoMcs = document.getElementById('mcs-resumo-lancamento')
    const resumoValorNegociado = document.getElementById('valor-negociado-resumo-lancamento')
    const resumoTelhado = document.getElementById('telhado-resumo-lancamento')
    const resumoValorInicial = document.getElementById('valor-inicial-resumo-lancamento')
    const resumoDesconto = document.getElementById('desconto-resumo-lancamento')
    const resumoFormaPagamento = document.getElementById('forma-pagamento-resumo-lancamento')
    const resumoPromocao = document.getElementById('promocao-resumo-lancamento')


    resumoQuantidadePlaca.textContent = proposta.placas
    resumoInversor.textContent = proposta.inversor
    resumoSistema.textContent = proposta.sistema
    resumoMcs.textContent = negociacao. resultadoMcsNegociado.toFixed(1) + "%"
    resumoValorNegociado.textContent = formatarMoeda(negociacao.valorNegociado)
    resumoTelhado.textContent = proposta.telhado
    resumoValorInicial.textContent = formatarMoeda(proposta.valorFinalProposta)
    resumoDesconto.textContent = negociacao.desconto.toFixed(1) + "%"
    resumoFormaPagamento.textContent = negociacao.tipoPagamento1
    resumoPromocao.textContent = proposta.promocao

}
async function buscarCep(cep) {

    const campoCep = document.getElementById('input-cep-lancamento')
    const campoBairro = document.getElementById('input-bairro-lancamento')
    const campoCidade = document.getElementById('input-cidade-lancamento')
    const campoUf = document.getElementById('input-estado-lancamento')
    const campoRua = document.getElementById('input-rua-lancamento')

    const resumoCep = document.getElementById('endereco-resumo-lancamento')
    const resumoRua = document.getElementById('rua-resumo-lancamento')
    const resumoBairro = document.getElementById('bairro-resumo-lancamento')
    const resumoCidade = document.getElementById('cidade-resumo-lancamento')
    const resumoEstado = document.getElementById('estado-resumo-lancamento')





    cep = cep.replace(/\D/g, "");

    if (cep.length !== 8) return;

    try {

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }

        inputRuaLancamento.value = dados.logradouro;
        inputBairroLancamento.value = dados.bairro;
        inputCidadeLancamento.value = dados.localidade;
        inputEstadoLancamento.value = dados.uf;


        lancamento.cep = campoCep.value
        lancamento.bairro = campoBairro.value
        lancamento.rua = campoRua.value
        lancamento.cidade = campoCidade.value
        lancamento.estado = campoUf.value


        resumoBairro.textContent = lancamento.bairro
        resumoCidade.textContent = lancamento.cidade
        resumoRua.textContent = lancamento.rua
        resumoEstado.textContent = lancamento.estado
        

    } catch (erro) {

        console.error("Erro ao consultar o CEP:", erro);

    }

}

function attResumoNomeLancamento () {

    const resumoNomeLancamento = document.getElementById('cliente-resumo-lancamento')

    lancamento.cliente = campoNomeLancamento.value
    resumoNomeLancamento.textContent = lancamento.cliente
}
function attResumoCpfLancamento () {

    const resumoCpfLancamento = document.getElementById('cpf-resumo-lancamento')

    lancamento.cpf = campoCpfLancamento.value
    resumoCpfLancamento.textContent = lancamento.cpf
}
function attResumoContatoLancamento () {

    const resumoContatoLancamento = document.getElementById('contato-resumo-lancamento')

    lancamento.contato = campoContatoLancamento.value
    resumoContatoLancamento.textContent = lancamento.contato
}
function attResumoRgLancamento () {

    const resumoRgLancamento = document.getElementById('rg-resumo-lancamento')

    lancamento.rg = campoRgLancamento.value
    resumoRgLancamento.textContent = lancamento.rg
}
function attResumoEmailLancamento () {

    const resumoEmailLancamento = document.getElementById('e-mail-resumo-lancamento')

    lancamento.email = campoEmailLancamento.value
    resumoEmailLancamento.textContent = lancamento.email
}
function attResumoNumeroLancamento(){

    const resumoNumero = document.getElementById('numero-resumo-lancamento')
    lancamento.numero = campoNumeroLancamento.value
    resumoNumero.textContent = lancamento.numero
    
}
function attResumoNumeroInstalacaoLancamento(){

       const resumoNumeroInstalacaoLancamento = document.getElementById('numero-instalacao-resumo-lancamento')

    lancamento.numeroInstalacao = campoNumeroInstalacaoLancamento.value
    resumoNumeroInstalacaoLancamento.textContent = lancamento.numeroInstalacao
    
}
function attResumoLocalObraLancamento(){

    const resumoLocal = document.getElementById('local-resumo-lancamento')

    if(swipeLocalLancamento.checked) {


        lancamento.obra = "Sim"
        resumoLocal.textContent = lancamento.obra
    }
   else {

        lancamento.obra = "Não"
        resumoLocal.textContent = lancamento.obra

   }
      
}
function attResumoUnificacaoLancamento(){

    const resumoUnificacao = document.getElementById('unificacao-resumo-lancamento')

    if(swipeUnificacaoLancamento.checked) {


        lancamento.unificacao = "Sim"
        resumoUnificacao.textContent = lancamento.unificacao
    }
   else {

        lancamento.unificacao = "Não"
        resumoUnificacao.textContent = lancamento.unificacao

   }
      
}
function attResumoAdequacaoLancamento(){

    const resumoAdequacao = document.getElementById('adequacao-resumo-lancamento')

    if(swipeAdequacaoLancamento.checked) {


        lancamento.adequacao = "Sim"
        resumoAdequacao.textContent = lancamento.adequacao
    }
   else {

        lancamento.adequacao = "Não"
        resumoAdequacao.textContent = lancamento.adequacao

   }
      
}
function attResumoReformaLancamento(){

    const resumoReforma = document.getElementById('reforma-resumo-lancamento')

    if(swipeReformaLancamento.checked) {


        lancamento.reforma = "Sim"
        resumoReforma.textContent = lancamento.reforma
    }
   else {

        lancamento.reforma = "Não"
        resumoReforma.textContent = lancamento.reforma

   }
      
}
function attResumoEmbutidoLancamento(){

    const resumoEmbutido = document.getElementById('embutido-resumo-lancamento')

    if(swipeEmbutidoLancamento.checked) {


        lancamento.embutido = "Sim"
        resumoEmbutido.textContent = lancamento.embutido
    }
   else {

        lancamento.embutido = "Não"
        resumoEmbutido.textContent = lancamento.embutido

   }
      
}
function attResumoRateioLancamento(){

    const resumoEmbutido = document.getElementById('rateio-resumo-lancamento')

    if(swipeRateioLancamento.checked) {


        lancamento.rateio = "Sim"
        resumoEmbutido.textContent = lancamento.rateio
    }
   else {

        lancamento.rateio = "Não"
        resumoEmbutido.textContent = lancamento.rateio

   }
      
}
function attResumoSdrLancamento() {

    const resumoSdr = document.getElementById('sdr-resumo-lancamento')

    lancamento.sdr = campoSdrLancamento.value
    resumoSdr.textContent = lancamento.sdr
}
function attResumoCloserLancamento() {

    const resumoCloser = document.getElementById('closer-resumo-lancamento')

    lancamento.closer = campoCloserLancamento.value
    resumoCloser.textContent = lancamento.closer
}
function attResumoBuLancamento() {

    const resumoBu = document.getElementById('bu-resumo-lancamento')

    lancamento.bu = campoBuLancamento.value
    resumoBu.textContent = lancamento.bu
}
function attResumoCanalLancamento() {

    const resumoCanal = document.getElementById('canal-resumo-lancamento')

    lancamento.canalLancamento = campoCanalLancamento.value
    resumoCanal.textContent = lancamento.canalLancamento
}
function attResumoConcessionariaLancamento() {

    const resumoConcessionaria = document.getElementById('concessionaria-resumo-lancamento')

    lancamento.concessionaria = campoConcessionariaLancamento.value
    resumoConcessionaria.textContent = lancamento.concessionaria
}
function attResumoUnidadeLancamento() {

    const resumoUnidade = document.getElementById('unidade-resumo-lancamento')

    lancamento.unidade = campoUnidadeLancamento.value
    resumoUnidade.textContent = lancamento.unidade
}
function attResumoObservacaoLancamento() {

    const resumoObservacao = document.getElementById('observacao-resumo-lancamento')

    lancamento.observacao = campoObservacaoLancamento.value
    resumoObservacao.textContent = lancamento.observacao
}
function attTextareaObra(){

    lancamento.obsObra = textareaObra.value
}
function attTextareaUnificacao(){

    lancamento.obsUnificacao = textareaUnificacao.value
}
function attTextareaAdequacao(){

    lancamento.obsAdequacao = textareaAdequacao.value
}
function attTextareaReforma(){

    lancamento.obsReforma = textareaReforma.value
}
function attTextareaEmbutido(){

    lancamento.obsEmbutido = textareaEmbutido.value
}
function attTextareaRateio(){

    lancamento.obsRateio = textareaRateio.value
}
function attIdLancamento(){


    const idLancamento = document.getElementById('valor-id-lancamento-atual')
 
    idLancamento.textContent = lancamento.idLancamentoAtual

}