
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
 if(Number(n) >= 1 && Number(n) <= 1000){
     return true
 }else{
     return false
 }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `O valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
}else{
    window.alert(`O valor inválido ou já adicionado na lista`)
}

num.value = ''
num.focus()

}

function finalizar(){
    if(valores.length == 0 ) {
        window.alert('Adicione valoes antes de finalizar')
    }else{

        let total = valores.length
        let maior = valores[0]
        let menor = [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
              maior = valores[pos]
            if(valores[pos] < menor)
              menor = valores[pos]    
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos (${total}) números adicionados!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}