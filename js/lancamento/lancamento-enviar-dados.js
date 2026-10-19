const btnEnviarDadosLancamento = document.getElementById('btn-enviar-lancamento')

btnEnviarDadosLancamento.addEventListener('click', enviarDadosLancamento)

function enviarDadosLancamento() {

    let lancamentoValidado = "";

    lancamentoValidado = validarVazioLancamento()


    if (lancamentoValidado === "Sim"){

        return console.log("Proposta Não validada")
        
    }

    else {

        console.log("Proposta Validada")

    proposta.tipo = "registrarLançamento"

    const url = "https://script.google.com/macros/s/AKfycbyd4nwSMmewBnYNoYEb4sz4NiV4P_fo47LCC7s8BwforLXV1WbDnYX3fs4CmtJwS7Va-A/exec"
     fetch(url, {
            method: "POST",
            body: JSON.stringify(proposta)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
        attIdLancamento()
        lancamentoFinalizadoSelecionado()

        }

}