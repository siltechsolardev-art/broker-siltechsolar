const contribuicao = 0.47
const comissao = 0.05
const impostos = 0.06
const retorno = 1000
const inflacao = 0.01
const url = "https://script.google.com/macros/s/AKfycbwgDFS-rvEUbqcFpd5QdFh9ZSM_Hey1xD6uP7-XecVtnsGlyvhN7VHG_nzCGz63-uzOIQ/exec"
let dadosSolicitados = null

async function solicitarDados() {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    console.log("ID recebido:", dadosSolicitados);

    
    return 
}


solicitarDados()

//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.