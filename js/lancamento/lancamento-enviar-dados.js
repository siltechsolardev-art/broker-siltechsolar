
const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento');

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento);

async function enviarDadosLancamento() {
    const lancamentoValidado = validarVazioLancamento();

    if (lancamentoValidado === "Sim") {
        console.log("Proposta não validada");
        return;
    }

    try {
        // Aguarda o retorno do ID do lançamento atual
        const idLancamento = await solicitarIdllancamentoAtual();

        // Utiliza o ID retornado antes de enviar
        proposta.idLancamento = idLancamento;
        proposta.idLancamentoAtual = idLancamento + 1;
        proposta.tipo = "registrarLançamento";

        console.log("ID do lançamento:", proposta.idLancamento);
        console.log("Proposta validada");
        console.log(proposta);
        

        const url = "https://script.google.com/macros/s/AKfycbzC1csz_FQFAON_9IW2yu1-4652fg2uFeXTxdK084kwNOHPlGl2gobDQTjSAVoBejDAtg/exec";

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(proposta)
        });

        const data = await response.json();

        console.log(data);

        attIdLancamento();
        lancamentoFinalizadoSelecionado();

    } catch (error) {
        console.error("Erro ao enviar lançamento:", error);
    }
}


//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.