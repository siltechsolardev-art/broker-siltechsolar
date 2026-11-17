const url = "https://script.google.com/macros/s/AKfycbyc3XdrJfPS1buEyrfYOtoxyIHSZc_fHeK9YImkZnEhhDc2di6v4przZJjIwL9rvz7OFg/exec"

let dadosSolicitados = null

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
solicitarDados()
solicitarPropostas()