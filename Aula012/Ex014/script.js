
function carregar() {
var msg = window.document.getElementById(`msg`)
var img = window.document.getElementById(`imagem`)

var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Horário atual: ${hora}H.`


if(hora >= 6 && hora < 12) {
      img.src = `manha.jpg`
      window.document.body.style.background = `#ADFF2F`

}else if(hora >= 0 && hora < 6 ){
    img.src = `madrugada.jpg`
    window.document.body.style.background = `#000000`    
}else if(hora >= 12 && hora < 18) {
      img.src = `tarde.jpg`
      window.document.body.style.background = `#FFA500`
}else{
      img.src = `noite.jpg`
      window.document.body.style.background = `#2F4F4F`
}
}