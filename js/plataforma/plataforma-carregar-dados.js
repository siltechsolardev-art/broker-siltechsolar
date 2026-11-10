const contribuicao = 0.47
const comissao = 0.05
const impostos = 0.08
const retorno = 1000
const inflacao = 0.01
const metaMensal = 650000
const url = "https://script.google.com/macros/s/AKfycbxQwH594_uedoTxUtSRQuCGektNJZo_8dcfs9uRabk5xPyT3Ku4VoDHLTRikuyNLSpHBQ/exec"
let dadosSolicitados = null

async function solicitarDados() {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const dadosSolicitados = await resposta.json();

    console.log("Dados recebidos:", dadosSolicitados);
    console.log(dadosSolicitados.maiorID)
    
    return dadosSolicitados
}


solicitarDados()

//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.