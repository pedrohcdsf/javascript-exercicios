var idade = 65
console.log(`Você tem ${idade} anos.`)
if(idade >= 18 && idade <= 65 ){
    console.log(`Voto obrigatório`)
}else if(idade >= 16 || idade > 65){
        console.log(`Voto opcinal`)
    }else if(idade < 16){
        console.log(`Não vota`)
    }
