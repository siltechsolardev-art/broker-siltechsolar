
async function solicitarIdllancamentoAtual() {
    const resposta = await fetch(
        "https://script.google.com/macros/s/AKfycbzC1csz_FQFAON_9IW2yu1-4652fg2uFeXTxdK084kwNOHPlGl2gobDQTjSAVoBejDAtg/exec"
    );

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o ID atual.");
    }

    const maiorID = await resposta.json();

    console.log("ID recebido:", maiorID);

    localStorage.setItem('idAtualLancamento', maiorID);

    return maiorID; // ESSENCIAL!
}
solicitarIdllancamentoAtual()

//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.