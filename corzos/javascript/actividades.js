let button = document.getElementById('button')

let pantalla1 = document.getElementById('pantalla1')
let pantalla2 = document.getElementById('pantalla2')

let calendario = [
  enero = {
    salidas: 1,
    fecha1: 'El 22',
    actividad1: 'El Telégrafo, de dificultad baja',
  },
  febrero = {
    salidas: 1,
    fecha1: 'El 11',
    actividad1: 'La Jarosa, de dificultad baja'
  },
  marzo = {
    salidas: 2,
    fecha1: 'El 11',
    actividad1: 'Quesería y Colmenar Viejo, de dificultad baja',
    fecha2: 'El 25',
    actividad2: 'Curso de orientación'
  },
  abril = {
    salidas: 1,
    fecha1: 'El 22',
    actividad1: 'Abantos, de dificultad alta'
  },
  mayo = {
    salidas: 2,
    fecha1: 'El 6',
    actividad1: 'El Dinosaurio de la Maliciosa, de dificultad media',
    fecha2: 'Del 26 al 28',
    actividad2: 'Peña Vieja (Picos de Europa), de dificultad alta'
  },
  junio = {
    salidas: 1,
    fecha1: 'El 17',
    actividad1: 'Pesquerías Reales (La Granja), de dificultad baja'
  },
  julio = {
    salidas: 2,
    fecha1: 'Del 1 al 8',
    actividad1: 'Camino de Santiago, de dificultad media',
    fecha2: 'El 15',
    actividad2: 'Nocturna, de dificultad baja'
  },
  agosto = {
    salidas: 0,
    fecha1: '',
    actividad1: ''
  },
  septiembre = {
    salidas: 2,
    fecha1: 'Del 15 al 17',
    actividad1: 'Montebrei (Huesca), de dificultad media',
    fecha2: '23',
    actividad2: 'Cena Corzos'
  },
  octubre = {
    salidas: 1,
    fecha1: 'El 21',
    actividad1: 'Pico Nevero, de dificultad media'
  },
  noviembre = {
    salidas: 1,
    fecha1: 'El 18',
    actividad1: 'Barrancas Burujón, de dificultad baja'
  },
  diciembre = {
    salidas: 1,
    fecha1: 'El 16',
    actividad1: 'Refugio Giner, de dificultad baja'
  }
]

function actividad(){
  let seleccionarMes = document.getElementById('seleccionarMes').value

  switch(seleccionarMes){
    case 'enero':
      if(calendario[0].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[0].salidas == 1){
        pantalla1.textContent = `${calendario[0].fecha1} de ${seleccionarMes}: ${calendario[0].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[0].fecha1} de ${seleccionarMes}: ${calendario[0].actividad1}`
        pantalla2.textContent = `${calendario[0].fecha2} de ${seleccionarMes}: ${calendario[0].actividad2}`
      }
    break;

    case 'febrero':
      if(calendario[1].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[1].salidas == 1){
        pantalla1.textContent = `${calendario[1].fecha1} de ${seleccionarMes}: ${calendario[1].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[1].fecha1} de ${seleccionarMes}: ${calendario[1].actividad1}`
        pantalla2.textContent = `${calendario[1].fecha2} de ${seleccionarMes}: ${calendario[1].actividad2}`
      }
    break;
    
    case 'marzo':
      if(calendario[2].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[2].salidas == 1){
        pantalla1.textContent = `${calendario[2].fecha1} de ${seleccionarMes}: ${calendario[2].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[2].fecha1} de ${seleccionarMes}: ${calendario[2].actividad1}`
        pantalla2.textContent = `${calendario[2].fecha2} de ${seleccionarMes}: ${calendario[2].actividad2}`
      }
    break;
    
    case 'abril':
      if(calendario[3].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[3].salidas == 1){
        pantalla1.textContent = `${calendario[3].fecha1} de ${seleccionarMes}: ${calendario[3].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[3].fecha1} de ${seleccionarMes}: ${calendario[3].actividad1}`
        pantalla2.textContent = `${calendario[3].fecha2} de ${seleccionarMes}: ${calendario[3].actividad2}`
      }
    break;
    
    case 'mayo':
      if(calendario[4].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[4].salidas == 1){
        pantalla1.textContent = `${calendario[4].fecha1} de ${seleccionarMes}: ${calendario[4].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[4].fecha1} de ${seleccionarMes}: ${calendario[4].actividad1}`
        pantalla2.textContent = `${calendario[4].fecha2} de ${seleccionarMes}: ${calendario[4].actividad2}`
      }
    break;
    
    case 'junio':
      if(calendario[5].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[5].salidas == 1){
        pantalla1.textContent = `${calendario[5].fecha1} de ${seleccionarMes}: ${calendario[5].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[5].fecha1} de ${seleccionarMes}: ${calendario[5].actividad1}`
        pantalla2.textContent = `${calendario[5].fecha2} de ${seleccionarMes}: ${calendario[5].actividad2}`
      }
    break;
    
    case 'julio':
      if(calendario[6].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[6].salidas == 1){
        pantalla1.textContent = `${calendario[6].fecha1} de ${seleccionarMes}: ${calendario[6].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[6].fecha1} de ${seleccionarMes}: ${calendario[6].actividad1}`
        pantalla2.textContent = `${calendario[6].fecha2} de ${seleccionarMes}: ${calendario[6].actividad2}`
      }
    break;
    
    case 'agosto':
        if(calendario[7].salidas == 0){
          pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
          pantalla2.textContent = ``
        }
        else if(calendario[7].salidas == 1){
          pantalla1.textContent = `${calendario[7].fecha1} de ${seleccionarMes}: ${calendario[7].actividad1}`
          pantalla2.textContent = ``
        }else{
          pantalla1.textContent = `${calendario[7].fecha1} de ${seleccionarMes}: ${calendario[7].actividad1}`
          pantalla2.textContent = `${calendario[7].fecha2} de ${seleccionarMes}: ${calendario[7].actividad2}`
        }
    break;
    
    case 'septiembre':
      if(calendario[8].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[8].salidas == 1){
        pantalla1.textContent = `${calendario[8].fecha1} de ${seleccionarMes}: ${calendario[8].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[8].fecha1} de ${seleccionarMes}: ${calendario[8].actividad1}`
        pantalla2.textContent = `${calendario[8].fecha2} de ${seleccionarMes}: ${calendario[8].actividad2}`
      }
    break;
    
    case 'octubre':
      if(calendario[9].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[9].salidas == 1){
        pantalla1.textContent = `${calendario[9].fecha1} de ${seleccionarMes}: ${calendario[9].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[9].fecha1} de ${seleccionarMes}: ${calendario[9].actividad1}`
        pantalla2.textContent = `${calendario[9].fecha2} de ${seleccionarMes}: ${calendario[9].actividad2}`
      }
    break;
    
    case 'noviembre':
      if(calendario[10].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      else if(calendario[10].salidas == 1){
        pantalla1.textContent = `${calendario[10].fecha1} de ${seleccionarMes}: ${calendario[10].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[10].fecha1} de ${seleccionarMes}: ${calendario[10].actividad1}`
        pantalla2.textContent = `${calendario[10].fecha2} de ${seleccionarMes}: ${calendario[10].actividad2}`
      }
    break;
    
    case 'diciembre':
      if(calendario[11].salidas == 0){
        pantalla1.textContent = `En ${seleccionarMes} no hay actividades`
        pantalla2.textContent = ``
      }
      if(calendario[11].salidas == 1){
        pantalla1.textContent = `${calendario[11].fecha1} de ${seleccionarMes}: ${calendario[11].actividad1}`
        pantalla2.textContent = ``
      }else{
        pantalla1.textContent = `${calendario[11].fecha1} de ${seleccionarMes}: ${calendario[11].actividad1}`
        pantalla2.textContent = `${calendario[11].fecha2} de ${seleccionarMes}: ${calendario[11].actividad2}`
      }
    break;
  }
}

button.addEventListener('click', actividad)