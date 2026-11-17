const contribuicao = 0.34
const comissao = 0.05
const impostos = 0.08
const retorno = 500
const inflacao = 0.01
const metaMensal = 650000
const url = "https://script.google.com/macros/s/AKfycbyc3XdrJfPS1buEyrfYOtoxyIHSZc_fHeK9YImkZnEhhDc2di6v4przZJjIwL9rvz7OFg/exec"
let dadosSolicitados = null
verificarAutenticacao();
async function solicitarDados() {
    const resposta = await fetch(`${url}?acao=dados`);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    console.log("Dados recebidos:", dadosSolicitados);


    
    return dadosSolicitados
}
async function solicitarPropostas() {
    const resposta = await fetch(`${url}?acao=propostas`);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    console.log("Dados recebidos:", dadosSolicitados);
    
    return dadosSolicitados
}
solicitarPropostas()

solicitarDados()

function carregarColaborador(){
  const colaborador = document.getElementById('usuario-plataforma')
  const cargo = document.getElementById('cargo-plataforma')

  const usuarioAtivo = JSON.parse(localStorage.getItem('usuarioAtivo'))

  colaborador.textContent = usuarioAtivo.usuarioDados.colaborador
  cargo.textContent = usuarioAtivo.usuarioDados.cargo
}
carregarColaborador()
function carregarCargo(){

    const usuarioAtivo = JSON.parse(localStorage.getItem('usuarioAtivo'))
    const cargo = usuarioAtivo.usuarioDados.cargo


    if(cargo === "Representante de Vendas"){
        visualizacoInfoSdr()
        esconderBotaoNegociar()

    }
    if (cargo === "Closer"){

        visualizacoInfoSdr()


    }if (cargo === "Closer Temporário"){

        visualizacoInfoSdr()


    }
    
}
carregarCargo()

function visualizacoInfoSdr() {

    const dadosResumo = document.querySelectorAll('.validar-sdr');
    dadosResumo.forEach(elemento => {
        elemento.classList.add('hidden');
    });

    
}
function esconderBotaoNegociar() {

    const botaoNegociar = document.getElementById('btn-negociar-proposta')
    
    botaoNegociar.classList.add('hidden')

    
}

//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.
function verificarAutenticacao() {
    const usuarioAtivo = localStorage.getItem("usuarioAtivo");

    if (!usuarioAtivo) {
      window.location.href = "index.html";
      return false;
    }

    return true;
  }

  verificarAutenticacao();