const contribuicao = 0.47
const comissao = 0.05
const impostos = 0.06
const retorno = 1000
const inflacao = 0.01
const url = "https://script.google.com/macros/s/AKfycbzivQXc8NQ0mPK0Xktz8zCtNpeP_Z-xcmCaB310foU-VT4qg0mJPymXzT_HCZxnxa5Xiw/exec"

async function solicitarDados() {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    console.log("ID recebido:", dadosSolicitados);


    return dadosSolicitados; // ESSENCIAL!
}
solicitarDados()

async function atribuirDados(){

    dadosBanco = await solicitarDadosBanco() 
    console.log(dadosBanco)
}

solicitarDadosBanco()
atribuirDados()
//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.