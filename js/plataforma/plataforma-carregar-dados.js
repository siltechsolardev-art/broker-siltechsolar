 async function solicitarIdllancamentoAtual(){

    const resposta = await fetch("https://script.google.com/macros/s/AKfycbzUti4tlomMvPoUg2cdtIjWAGYT322Fgiug5ZLVOhjczdKiJR5ZJqAfOL2X5sXq3QbH7Q/exec");

    const maiorID = await resposta.json();

    console.log(maiorID);

    localStorage.setItem('idAtualLancamento', maiorID)
}


solicitarIdllancamentoAtual()

