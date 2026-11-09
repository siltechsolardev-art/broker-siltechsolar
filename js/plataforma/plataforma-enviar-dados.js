const gerarPdf = document.getElementById('botao-gerar-pdf-proposta')

gerarPdf.addEventListener('click', ()=>{

    const campoVazio = validacaoPorCampoVazio()

    

    if (campoVazio === "Sim"){

        
         console.log('Campo Vazio Não Continuar')
         return
    }

    else {

        
  
    proposta.kitPlaca = proposta.placas * gerarPotencia() / 1000


    localStorage.setItem('propostaGerada', JSON.stringify(proposta));

        fetch(urlBancoDeDados, {
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


       carregarDadosProposta()
       propostaPdfSelecionado()
        carregarDadosNegociacao()

    }

})