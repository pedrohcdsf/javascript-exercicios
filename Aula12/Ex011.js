
var agora = new Date()
var hora = agora.getHours() 
console.log(`Agora são ${hora} horas`)
if(hora >= 6 && hora < 12){
    console.log(`Bom dia`)
}else if(hora >= 0 && hora < 6){
    console.log(`Boa madrugada`)
}else if(hora <= 18 ){
    console.log(`Boa tarde`)
}else if(hora >= 18){
    console.log(`Boa noite`)

}