const botaoAcessar = document.getElementById('btn-login-acessar')

botaoAcessar.addEventListener('click', autenticarUsuario)


async function autenticarUsuario() {
  inserirDadosUsuario();
  moverTelaAutenticacao();
  resetarTagAuntenticacao()
  

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(usuario)
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    

    // O Apps Script retorna { usuarioDados: { autenticacao, cargo, colaborador } }

    localStorage.setItem('usuarioAtivo', JSON.stringify(data))
    
    const usuarioAtivo = JSON.parse(localStorage.getItem('usuarioAtivo'))
    
    const autenticacao = usuarioAtivo.usuarioDados.autenticacao
    const colaborador = usuarioAtivo.usuarioDados.colaborador
    const cargo = usuarioAtivo.usuarioDados.cargo
    

    if (autenticacao === "Autenticado") {
      autenticacaoSucesso(autenticacao);
      await timer2s();
      moverTelaSetores();
      inserirColaborador(colaborador)
      inserirCargo (cargo)

    } else {
      autenticacaoFalha();
      await timer2s();
      limparCamposLogin()
        moverTelaLogin();
       
    }
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    autenticacaoFalha();
  }
}