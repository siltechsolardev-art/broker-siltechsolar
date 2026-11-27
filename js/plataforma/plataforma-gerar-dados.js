
function gerarColaborador() {

  const usuarioAtivo = document.getElementById('usuario-plataforma')

  proposta.colaborador = usuarioAtivo.textContent
 console.log(proposta.custoMaterialInstalacao)
  return proposta.colaborador

 

}
function gerarIdProposta() {
    const hoje = new Date();

    const data =
      hoje.getFullYear() +
      String(hoje.getMonth() + 1).padStart(2, "0") +
      String(hoje.getDate()).padStart(2, "0");

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < 3; i++) {
      codigo += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    const resultado = `PROP${data}${codigo}`;
    proposta.id = resultado;

    return proposta.id ;
}
function gerarDataProposta() {
    const hoje = new Date();

    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();


    const resultado = `${dia}/${mes}/${ano}`

    proposta.data = resultado

    return proposta.data
}
function gerarInversor(){

    const placas = proposta.placas
    const inversorTipo = document.getElementById('inversor-proposta')


    if(inversorTipo.value === "Híbrido") {

        if(placas <= 18) {

        proposta.inversor = "01 Inversor Híbrido FoxESS - 5,7 kW"

        return proposta.inversor
      } 
      if(placas >18 && placas <= 24) {

        proposta.inversor = "01 Inversor Híbrido FoxESS - 7,5 kW"

        return proposta.inversor
      } 
      if(placas >24 && placas <= 35) {

        proposta.inversor = "02 Inversores Híbridos FoxESS - 5,7 kW"

        return proposta.inversor
      } 
      if(placas >35 && placas <= 48) {

        proposta.inversor = "02 Inversores Híbridos FoxESS - 7,5 kW"

        return proposta.inversor
      } 
      if(placas >49 && placas <= 60) {

        proposta.inversor = "02 Inversores Híbridos FoxESS - 7,5 kW + 01 Inversor Híbrido FoxESS 5,7 kW"

        return proposta.inversor
      } 
    }
    if (inversorTipo.value === "String Ongrid"){

      const placas = proposta.placas
    const potencia = proposta.potenciaPlaca
    const inversor = placas * potencia

    if(inversor <= 4500) {

      proposta.inversor = "1 Inversor Huawei - 3kW"

      return proposta.inversor
    } 
    if(inversor >= 4500 && inversor < 6000) {

      proposta.inversor = "1 Inversor Huawei - 4kW"
      
      return proposta.inversor
    } 
    if(inversor >= 6000 && inversor < 7500) {

      proposta.inversor = "1 Inversor Huawei - 5kW"
      
      return proposta.inversor
    } 
    if(inversor >= 7500 && inversor < 9000) {

      proposta.inversor = "1 Inversor Huawei - 6kW"
      
      return proposta.inversor
    } 
    if(inversor >= 9000 && inversor < 11250) {

      proposta.inversor = "1 Inversor Huawei - 7.5kW"
      
      return proposta.inversor
    } 
    if(inversor >= 11250 && inversor < 15000) {

      proposta.inversor = "1 Inversor Huawei - 10kW"
      
      return proposta.inversor
    } 
    if(inversor >= 15000 && inversor < 19500) {

      proposta.inversor = "2 Inversores Huawei - 10kW + 3kW"
      return proposta.inversor
    } 
    if(inversor >= 19500 && inversor < 21000) {

      proposta.inversor = "2 Inversores Huawei - 10kW + 4kW"
      
      return proposta.inversor
    } 
    if(inversor >= 21000 && inversor < 22500) {

      proposta.inversor = "2 Inversores Huawei - 10kW + 5kW"
      
      return proposta.inversor
    } 
    if(inversor >= 22500 && inversor < 24000) {

      proposta.inversor = "2 Inversores Huawei - 10kW + 6kW"
      
      return proposta.inversor
    } 
    if(inversor >= 24000 && inversor < 26250) {

      proposta.inversor = "2 Inversores Huawei - 10kW + 7.5kW"
      
      return proposta.inversor
    } 
    if(inversor >= 26250 && inversor < 30000) {

      proposta.inversor = "2 Inversores Huawei - 10kW + 10kW"
      
      return proposta.inversor
    } 
    if(inversor >= 30000 && inversor < 34500) {

      proposta.inversor = "3 Inversores Huawei - 10kW + 10kW + 3kW"
      
      return proposta.inversor
    } 
    if(inversor >= 34500 && inversor < 36000) {

      proposta.inversor = "3 Inversores Huawei - 10kW + 10kW + 4kW"
      
      return proposta.inversor
    } 
    if(inversor >= 36000 && inversor < 37500) {

      proposta.inversor = "3 Inversores Huawei - 10kW + 10kW + 5kW"
      
      return proposta.inversor
    } 
    if(inversor >= 37500 && inversor < 39000) {

      proposta.inversor = "3 Inversores Huawei - 10kW + 10kW + 6kW"
      
      return proposta.inversor
    } 
    if(inversor >= 39000 && inversor < 41250) {

      proposta.inversor = "3 Inversores Huawei - 10kW + 10kW + 7.5kW"
      
      return proposta.inversor
    } 
    if(inversor >= 41250 && inversor < 45000) {

      proposta.inversor = "3 Inversores Huawei - 10kW + 10kW + 10kW"
      
      return proposta.inversor
    } 
    if(inversor >= 45000 && inversor < 49500) {

      proposta.inversor = "4 Inversores Huawei - 10kW + 10kW + 10kW + 3kw"
      
      return proposta.inversor
    } 
    if(inversor >= 49500 && inversor < 51000) {

      proposta.inversor = "4 Inversores Huawei - 10kW + 10kW + 10kW + 4kw"
      
      return proposta.inversor
    } 
    if(inversor >= 51000 && inversor < 52500) {

      proposta.inversor = "4 Inversores Huawei - 10kW + 10kW + 10kW + 5kw"
      
      return proposta.inversor
    } 
    if(inversor >= 52500 && inversor < 54000) {

      proposta.inversor = "4 Inversores Huawei - 10kW + 10kW + 10kW + 6kw"
      
      return proposta.inversor
    } 
    if(inversor >= 54000 && inversor < 56250) {

      proposta.inversor = "4 Inversores Huawei - 10kW + 10kW + 10kW + 7.5kw"
      
      return proposta.inversor
    } 
    if(inversor >= 56250 && inversor < 60000) {

      proposta.inversor = "4 Inversores Huawei - 10kW + 10kW + 10kW + 10kW"
      
      return proposta.inversor
    } 
    if(inversor >= 60000 ) {

      proposta.inversor = "Acima da Capacidade"
      
      return proposta.inversor
    } 

    }
    


}
function gerarBateria(){

  const placas = proposta.placas
  const bateria = document.getElementById('bateria-proposta')

  if(placas > 0){
    proposta.bateria = "0"+ bateria.value + " Bateria FoxESS 5,7kWh"
    return
  }

  
}
function gerarArea(){

    const area = proposta.placas * 3
    proposta.area = area

   return proposta.area
 }
function gerarPotencia() {

  const campoModulo = document.getElementById('modulo-proposta')

  if (campoModulo.value === "615Wp Tier 1" ) {
    
    const potencia = 615
    proposta.potenciaPlaca = potencia
    return proposta.potenciaPlaca
  } 
  


}
 function gerarEconomiaEm15Anos() {
    return proposta.economiaEm15Anos = (proposta.economiaAnual * ((1 + inflacao) ** 15 - 1)) / inflacao;
}
function gerarEconomiaAnual() {
    const custoEnergia = proposta.precoKwh;
    return proposta.economiaAnual = calcularEnergia() * custoEnergia * 12 - contaComSiltech() * 12;
  }
function calcularEnergia() {
    const modulo = proposta.modulo;
    const placas = Number(proposta.placas);
    const hsp = Number(proposta.hsp);


     if (modulo === "615Wp Tier 1") {
      return proposta.energiaGerada = Number((hsp * 615 * 30 * 0.8) / 1000) * placas;
    }
 
  }
function contaComSiltech() {
    const instalacao = proposta.instalacao;

    if (instalacao === "Bifásico") {
      return proposta.contaComSiltech = 80;
    }

    if (instalacao === "Trifásico") {
      return proposta.contaComSiltech = 130;
    }

  }
function contaSemSiltech() {
    const custoEnergia = Number(proposta.precoKwh);

    return proposta.contaSemSiltech = calcularEnergia() * custoEnergia;
  }
