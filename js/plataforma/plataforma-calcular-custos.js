  function custoKitGerador() {
      const sistema = document.getElementById('inversor-proposta')



      if(sistema.value === "String Ongrid"){

        const valorBase = 6314.50
            const placasBase = 4
            const placas = proposta.placas
            let acrescimo = 0.15
      if (placas > 0 && placas <= 4 ) {

        const valor = valorBase
        proposta.custoKitGerador =  valor
        return proposta.custoKitGerador
      }

      else if (placas > 4 && placas <= 9 ){

        const valor = valorBase * (1 + acrescimo * (placas - placasBase))
        proposta.custoKitGerador =  valor
        return proposta.custoKitGerador

      }
      else if (placas >= 10 && placas <= 49 ){

        const valor = valorBase * (1 + (acrescimo + 0.01) * (placas - placasBase))
        proposta.custoKitGerador =  valor
        return proposta.custoKitGerador

      }
      else if (placas >= 50 && placas <= 79 ){

        const valor = valorBase * (1 + (acrescimo + 0.015) * (placas - placasBase))
        proposta.custoKitGerador =  valor
        return proposta.custoKitGerador

      }
       else if (placas == 80 ){

        const valor = valorBase * (1 + (acrescimo + 0.012) * (placas - placasBase))
        proposta.custoKitGerador =  valor
        return proposta.custoKitGerador

      }
      else if (placas > 80 ){

        const valor = valorBase * (1 + (acrescimo + 0.013) * (placas - placasBase))
        proposta.custoKitGerador =  valor
        return proposta.custoKitGerador

      }

          console.log("1")
      }
      if(sistema.value === "Híbrido"){
        
        const valorBase = 22789.25
          const placasBase = 5
          const placas = proposta.placas
          let adicional = 0.025
          const qtdBateria = document.getElementById('bateria-proposta').value
          const valorBateria = proposta.valorBateria * Math.max(0, qtdBateria - 1);

          console.log(qtdBateria)
          console.log(proposta.valorBateria)
           console.log(valorBateria)

          if(placas <= 5){

            const valor = valorBase 
            proposta.custoKitGerador = valor +  valorBateria
            return proposta.custoKitGerador
          }
          if (placas > 5 && placas <=9){

            const valor = (valorBase * (1+ adicional * (placas - placasBase))) +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
          if (placas > 9 && placas <=18){

            const valor = valorBase * (1 + (adicional + 0.003)*(placas - placasBase)) +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
          if (placas > 18 && placas <=24){

            const valor = valorBase * (1 + (adicional + 0.013)*(placas - placasBase)) +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
          if (placas > 24 && placas <=30){

            const valor = valorBase * (1 + (adicional + 0.03)*(placas - placasBase)) +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
          if (placas > 30 && placas <=35){

            const valor = valorBase * (1 + (adicional + 0.026)*(placas - placasBase)) +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
           if (placas > 36 && placas <=48){

            const valor = valorBase * (1 + (adicional + 0.03)*(placas - placasBase)) +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
          if (placas > 49 && placas <=60){

            const valor = valorBase * (1 + (adicional + 0.033)*(placas - placasBase))  +  valorBateria
            proposta.custoKitGerador = valor
            return proposta.custoKitGerador
          }
      }
    
   console.log("2")
    
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
    let instalacao = 959.84;
    


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
    const expansaoQtd = document.getElementById('qtd-expansao-proposta');

    if (expansaoQtd.value > 0) {
      return proposta.custoExpansao = 1000;
    } else {
      return proposta.custoExpansao =  0;
    }
  }
  function custoRetorno(){

    const retorno = 500
    proposta.custoRetorno = retorno

  return proposta.custoRetorno 
  }
  function custoMercadoriaVendida() {

    const inversor = document.getElementById('inversor-proposta')
    if(inversor.value === "String Ongrid"){

      proposta.cmv = 
      proposta.custoKitGerador +
      proposta.custoTelhado +
      proposta.custoHomologacao +
      proposta.custoInstalacao +
      proposta.custoMaterialInstalacao +
      proposta.custoRetorno
      

    return proposta.cmv

    }
    if(inversor.value === "Híbrido"){

      const adicionalMaterial = 1500
      const adicionalInstalacao = 1500
      proposta.cmv = 
      proposta.custoKitGerador +
      proposta.custoTelhado +
      proposta.custoHomologacao +
      (proposta.custoInstalacao + adicionalMaterial)+
      (proposta.custoMaterialInstalacao + adicionalInstalacao)+
      proposta.custoRetorno
      

    return proposta.cmv

    }
      
  }
   function valorFinalProposta() {

    const valorFinal = proposta.custoExpansao + (proposta.cmv / (1 - (contribuicao + impostos + comissao)));

    proposta.valorFinalProposta = valorFinal
    return proposta.valorFinalProposta 
  }
  



function custoInstalacao(){

    const placas = proposta.placas

    if(placas <= 13) {

      const valor = 205 * placas
      proposta.custoInstalacao = valor

      return proposta.custoInstalacao
    }
    if(placas >= 14 && placas <= 26) {

      const valor = 180 * placas
      proposta.custoInstalacao = valor

      return proposta.custoInstalacao
    }
    if(placas > 26 && placas <= 32) {

      const valor = 165 * placas
      proposta.custoInstalacao = valor

      return proposta.custoInstalacao
    }
     if(placas > 32 && placas <= 48) {

      const valor = 155 * placas
      proposta.custoInstalacao = valor

      return proposta.custoInstalacao
    }
    if(placas > 48 ) {

      const valor = 125 * placas
      proposta.custoInstalacao = valor

      return proposta.custoInstalacao
    }
  

  }