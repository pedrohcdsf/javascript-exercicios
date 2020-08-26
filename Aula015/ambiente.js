var num = [5, 8, 9, 2, 10]

num.push(3)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
//console.log(`a posição escolhida possui o número ${num[0]}`)

let pos = num.indexOf(2)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos} `)
}
