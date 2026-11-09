const urlBancoDeDados = "https://script.google.com/macros/s/AKfycbxrXS0iQ1--cMfZAn5O_lQb3CtKXLdvdjmHvaAhWimBtJ5Wp6PW3B6mG9GLx9FHSIf_vw/exec"
// const contribuicao = 0.47
// const comissao = 0.05
// const impostos = 0.06
// const retorno = 1000
// const inflacao = 0.01
let dadosBanco = []

async function solicitarDadosBanco() {

    
    const resposta = await fetch(urlBancoDeDados)
    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    // console.log("Dados Solicitados:", dadosSolicitados);

    return dadosSolicitados; // ESSENCIAL!
}

async function atribuirDados(){

    dadosBanco = await solicitarDadosBanco() 
    console.log(dadosBanco)
}

solicitarDadosBanco()
atribuirDados()
//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.