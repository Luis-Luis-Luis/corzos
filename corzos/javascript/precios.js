const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')

let precios1 = document.getElementById('precios1')
let precios2 = document.getElementById('precios2')

function mas(){
  boton1.classList.replace('boton-no-pulsado','boton-pulsado')
  boton2.classList.replace('boton-pulsado-menos','boton-no-pulsado')

  precios1.classList.replace('precios-no-visible','precios-visible')
  precios2.classList.replace('precios-visible','precios-no-visible')
}

function menos(){
  boton1.classList.replace('boton-pulsado','boton-no-pulsado')
  boton2.classList.replace('boton-no-pulsado','boton-pulsado-menos')

  precios1.classList.replace('precios-visible','precios-no-visible')
  precios2.classList.replace('precios-no-visible','precios-visible')
}

boton1.addEventListener('click', mas)
boton2.addEventListener('click', menos)