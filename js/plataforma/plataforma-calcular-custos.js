  function custoKitGerador() {
      

    const inversor = proposta.valorInversor;
    const qtdPlacas = proposta.placas;
    const valorPlaca = proposta.valorPlaca;
    const cabos = proposta.valorCabos;
    const estrutura = proposta.valorEstrutura;
    const conectores = proposta.valorConectores;

    if (qtdPlacas <= 4){
          const custoKitGerador = inversor + (qtdPlacas * valorPlaca) + cabos + estrutura + conectores;
          proposta.custoKitGerador = custoKitGerador
          return proposta.custoKitGerador;
    }
    else {
           
          const custoKitGerador4Placas = (inversor + (qtdPlacas * valorPlaca) + cabos + estrutura + conectores);
          const custoFixo = custoKitGerador4Placas * 0.08

          const custoKitGerador = custoKitGerador4Placas + custoFixo
          proposta.custoKitGerador = custoKitGerador

          console.log()
          return proposta.custoKitGerador;
    }
    

   


  
  }
  function custoTelhado() {
    const telhado = proposta.telhado;

    if (telhado === "Cerâmico") {
      return proposta.custoTelhado = 0;
    }
    if (telhado === "Fibrocimento") {
      return proposta.custoTelhado = 0;
    }
    if (telhado === "Laje") {
      return proposta.custoTelhado = 3000;
    }
    if (telhado === "Metálico") {
      return proposta.custoTelhado = 0;
    }
  }
  function custoHomologacao() {

    const homologacao = 450
    proposta.custoHomologacao = homologacao

    return proposta.custoHomologacao

    
  }
  function custoMaterialInstalacao() {

    const placas = proposta.placas;
    let instalacao = 1173;
    


      if(placas < 15) {

        instalacao = instalacao * 1
        proposta.custoMaterialInstalacao = instalacao

        

        return proposta.custoMaterialInstalacao 
      }
      if(placas > 15 && placas <= 30)  {

        instalacao = instalacao * 2
        proposta.custoMaterialInstalacao = instalacao
        
        return proposta.custoMaterialInstalacao 
      }
      if(placas > 30 && placas <= 45)  {

        instalacao = instalacao * 3
        proposta.custoMaterialInstalacao = instalacao
        return proposta.custoMaterialInstalacao 
      }
      if(placas > 45 && placas <=60)  {

        instalacao = instalacao * 4
        proposta.custoMaterialInstalacao = instalacao
        return proposta.custoMaterialInstalacao 
      }
      if(placas > 60 && placas <=75)  {

        instalacao = instalacao * 5
        proposta.custoMaterialInstalacao = instalacao
        return proposta.custoMaterialInstalacao 
      }
      if(placas > 75 && placas <=90)  {

        instalacao = instalacao * 6
        proposta.custoMaterialInstalacao = instalacao
        return proposta.custoMaterialInstalacao 
      }
      if(placas > 90 && placas <=105)  {

        instalacao = instalacao * 7
        proposta.custoMaterialInstalacao = instalacao
        return proposta.custoMaterialInstalacao 
      }

   
  }
  function custoExpansao() {
    const expansao = document.getElementById('expansao-proposta');

    if (expansao.value === "Sim") {
      return proposta.custoExpansao = 1000;
    } else {
      return proposta.custoExpansao =  0;
    }
  }
  function custoRetorno(){

    const retorno = 1000
    proposta.custoRetorno = retorno

  return proposta.custoRetorno 
  }
  function custoMercadoriaVendida() {
    
      proposta.cmv = 
      proposta.custoKitGerador +
      proposta.custoTelhado +
      proposta.custoHomologacao +
      proposta.custoMaterialInstalacao +
      proposta.custoRetorno +
      proposta.custoExpansao

    return proposta.cmv
  }
   function valorFinalProposta() {

    const valorFinal = (proposta.cmv / (1 - (contribuicao + impostos + comissao)));

    proposta.valorFinalProposta = valorFinal
    return proposta.valorFinalProposta 
  }