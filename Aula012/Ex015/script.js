function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = window.document.getElementById(`txtano`)
 var res = window.document.getElementById(`res`)

 if(fano.value.length == 0 || Number(fano.value > ano)){
     window.alert(`[ERRO] verfique seus dados novamente! `)
 }else{
     var fsex = window.document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''
     var img = document.createElement(`img`)
     img.setAttribute('id', 'foto')
     img.setAttribute('width', '300');
     img.setAttribute('heght', '300') 
     if(fsex[0].checked){
         gênero = 'Homem'
         if(idade >= 0 && idade < 10){
             img.setAttribute('src', 'mbebe.jpg')
         }else if(idade < 21){
             img.setAttribute('src', 'jmenino.jpg')
         }else if(idade >= 21 && idade < 50){
             img.setAttribute('src', 'h.jpg')
         }else{
             img.setAttribute('src', 'velho.jpg')
         }
     }else if(fsex[1].checked){
         gênero = 'Mulher'
         if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'mebebe.jpg')
        }else if(idade < 21){
            img.setAttribute('src', 'jmenina.jpg')
        }else if(idade >= 21 && idade < 50){
            img.setAttribute('src', 'm.jpg')
        }else{
            img.setAttribute('src', 've.jpg')
        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
     res.appendChild(img)
}
}