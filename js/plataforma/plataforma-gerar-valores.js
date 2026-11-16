

function valorPlaca(){

    const placa = document.getElementById('modulo-proposta')

   
     if (placa.value === "615Wp Tier 1" ) { 
        proposta.valorPlaca = 612.50
        return proposta.valorPlaca
        }

}
function valorInversor(){

   const inversor = proposta.inversor

   if (inversor === "Huawei Inversor - 3kW" ) {
      proposta.valorInversor = 3256.51
      return proposta.valorInversor
   }
   if (inversor === "Huawei Inversor - 4kW" ) {
      proposta.valorInversor = 3548
      return proposta.valorInversor
   }
   if (inversor === "Huawei Inversor - 5kW" ) {
      proposta.valorInversor = 3869
      return proposta.valorInversor
   }
   if (inversor === "Huawei Inversor - 6kW" ) {
      proposta.valorInversor = 4125.47
      return proposta.valorInversor
   }
   if (inversor === "Huawei Inversor - 7.5kW" ) {
      proposta.valorInversor = 6854
      return proposta.valorInversor
   }
   if (inversor === "Huawei Inversor - 10kW" ) {
      proposta.valorInversor = 7925
      return proposta.valorInversor
   }
}
function valorCabos(){
   const caboCcPreto = 172.17
   const caboCcVermelho = 172.17

   proposta.valorCabos = caboCcPreto + caboCcVermelho
   return proposta.valorCabos
}
function valorEstrutura(){
   const estrutura = 1025.59
   proposta.valorEstrutura = estrutura
   return proposta.valorEstrutura

}
function valorConectores(){

   const conectores = 45.10
   proposta.valorConectores = conectores
   return proposta.valorConectores  
}
function valorBateria(){


   const valor = 9000
   proposta.valorBateria = valor

   return proposta.valorBateria
}
