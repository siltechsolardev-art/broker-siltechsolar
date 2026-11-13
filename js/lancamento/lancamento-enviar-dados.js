
const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento');

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento);

let enviandoLancamento = false;

async function enviarDadosLancamento() {
    const lancamentoValidado = validarVazioLancamento();
    const botaoEnviar = document.getElementById('btn-enviar-lancamento')

    if (enviandoLancamento) return;

    if (lancamentoValidado === "Sim") {
        console.log("Proposta não validada");
        return;
    }

    enviandoLancamento = true;
    botaoEnviar.style.pointerEvents = "none";
    botaoEnviar.style.opacity = "0.6";
    botaoEnviar.setAttribute("aria-disabled", "true");
    try {
        // Aguarda o retorno do ID do lançamento atual

        

        const { maiorId } = await solicitarDados();

        // Utiliza o ID retornado antes de enviar
        lancamento.idLancamento = Number(maiorId);
        lancamento.idLancamentoAtual = Number(maiorId) + 1;


        console.log("ID do lançamento:", lancamento.idLancamento);
        console.log("Proposta validada");
        console.log(proposta);
        //Adicionando valores na variavel Lancamento.

        lancamento.data = proposta.data;
        lancamento.inversor = proposta.inversor;
        lancamento.modulo = proposta.modulo;
        lancamento.placas = proposta.placas;
        lancamento.telhado = proposta.telhado;
        lancamento.mcs = negociacao.resultadoMcsNegociado;
        lancamento.valorInicial = proposta.valorFinalProposta;
        lancamento.valorFinal = negociacao.valorNegociado;
        lancamento.pagamento = negociacao.tipoPagamento1;
        lancamento.desconto = negociacao.desconto;
        lancamento.promocao = proposta.promocao;
        

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(lancamento)
        });

        const data = await response.json();

        console.log(data);

        attIdLancamento();
        lancamentoFinalizadoSelecionado();

    } catch (error) {
        console.error("Erro ao enviar lançamento:", error);
    }
    finally {
    enviandoLancamento = false;
    botaoEnviar.style.pointerEvents = "";
    botaoEnviar.style.opacity = "";
    botaoEnviar.removeAttribute("aria-disabled");
  }
}


//Revisao código para ficar mais limpo, feito com auxilio do Chat, necessário limpar o código.