
function contar() {

    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    }else{
       res.innerHTML = 'Contando:<br>'
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if(p == 0){
           window.alert('Passo inválido! Consierando PASSO 1')
       }
     if( i < f){
         //contagem crescente
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F4A8}`
        }
    }else {
        //contagem regressiva
        for(var c = i; c >= f; c -= p ){
            res.innerHTML += ` ${c} \u{1F601}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
      
    }


}