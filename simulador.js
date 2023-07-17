//clase constructotra
class ejercicios{
    constructor (id, nombreEjer, repet, tipo, dia){
        this.id = id,
        this.nombreEjer = nombreEjer,
        this.repet = repet,
        this.tipo = tipo
        this.dia = dia
    }

mostrarInfoEjercicios(){
    console.log(`el ejercicio es ${this.nombreEjer} cantidad de repeticiones ${this.repet} tipo de ejercicio ${this.tipo}`)
}

}

const ejercicio1 = new ejercicios(1, "pecho banco plano", 15, 1, "martes")
const ejercicio2 = new ejercicios(2, "pecho banco inclinado", 12, 1, "martes")
const ejercicio3 = new ejercicios(3, "pull up", 8, 2, "miercoles")
const ejercicio4 = new ejercicios(4, "cinta", 15, 3, "viernes")
const ejercicio5 = new ejercicios(5, "sentadilla sumo", 12, 2, "lunes")
const ejercicio6 = new ejercicios(6, "cuadriceps", 10, 2, "lunes")
const ejercicio7 = new ejercicios(7, "remo con polea", 12, 2, "miercoles")
const ejercicio8 = new ejercicios(8, "vuelos laterales", 10, 2, "jueves")
const ejercicio9 = new ejercicios(9, "press militar", 12, 2, "jueves")
const ejercicio10 = new ejercicios(10, "stocada dinamica", 15, 3, "viernes")
//crando un array de objetos
let rutina = []
if(localStorage.getItem("rutina")){
  
  rutina = JSON.parse(localStorage.getItem("rutina"))
}else{
  
  rutina.push(ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5, ejercicio6, ejercicio7, ejercicio8, ejercicio9, ejercicio10)
  localStorage.setItem("rutina", JSON.stringify(rutina))
}
//array para modal de ejercicios
let ejercicioCreado

if(localStorage.getItem("rutinaCreada")){
  ejercicioCreado = JSON.parse(localStorage.getItem("rutinaCreada"))
}else{
  ejercicioCreado = []
  localStorage.setItem("rutinaCreada", ejercicioCreado)
}

//funcion para simular planes de entrenamiento
function planEntre(){
    let tipoRutina = showRutina.value
  //funcion para filtrar segun el tipo de rutina que elija el usuario y el dia de la semana
    const fecha = Date() ;
const dia = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];
const numeroDia = new Date(fecha).getDay();
const nombreDia = dia [numeroDia];
    function filEjer(array){
        let ejertipo = tipoRutina
       
        let fil = array.filter(
            (ejercicios) => ejercicios.tipo == ejertipo && ejercicios.dia == nombreDia
        )
        if(fil == 0){
          
          cartelH3()
          
            console.log("no hay ejericios disponibles")
         }else{
            console.log("hola")
            mostrarEjer(fil)
         }
    }
 //condicional para filtral segun el tipo de ejercicio  
    if(tipoRutina == 1){
        filEjer(rutina)
        
    }else if( tipoRutina == 2){
        filEjer(rutina)
        
    }else if( tipoRutina == 3){
       filEjer(rutina)
    }else{

    }
}

//funcion para agregar un objeto al array
function agregarEjer(array){

    let nomEjer = document.getElementById("nomEjer")
    let repEjer = document.getElementById("repEjer")
    let tipoEjer = document.getElementById("inputState")
    let tipoDia = document.getElementById("tipoDia") 
    
    const ejerNuevo = new ejercicios(rutina.length+1, nomEjer.value, repEjer.value, tipoEjer.value, tipoDia.value)
    rutina.push(ejerNuevo)
    localStorage.setItem("rutina", JSON.stringify(array))
    
     nomEjer.value = ""
     repEjer.value = ""
     tipoEjer.value = ""
     tipoDia.value = ""
     
}
//capturando DOM
let ejerciciosDiv = document.getElementById("ejercicios")
let formularioDiv = document.getElementById("formulario")
let mostrarFormulario = document.getElementById("formularioBtn")
let ocultarFormulario = document.getElementById("ocultarFormulario")
let showRutina = document.getElementById("showRutina")
let formulario2 = document.getElementById("formulario2")
let rutinaBtn = document.getElementById("rutinaBtn")
let alertaCartel = document.getElementById("alertaCartel")
let reiniciarBtn = document.getElementById("reiniciarBtn")
let crearRutinaBtn = document.getElementById("crearRutinaBtn")
let rutinaModalBody = document.getElementById("modal-body")
let showRCreada = document.getElementById("showRCreada")
let vaciar = document.getElementById("vaciar")

//funcion para mostrar los ejercicios
function mostrarEjer(rutina){
  
  ejerciciosDiv.innerHTML=``
  for(let ejercicios of rutina){
      let nuevoEjercicioDiv = document.createElement("div")
      nuevoEjercicioDiv.className = "col-12 col-md-6 col-lg-4 my-2"
      nuevoEjercicioDiv.innerHTML = `<div id=${ejercicios.id} class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Ejercicio</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${ejercicios.nombreEjer}</h6>
        <p class="card-text">Repeticiones/tiempo: ${ejercicios.repet}.</p>
        <button id="agregarRutina${ejercicios.id}" class="btn btn-primary">Agregar Rutina</button>
      </div>
    </div>`

      
    ejerciciosDiv.appendChild(nuevoEjercicioDiv)
    let agregarRutina = document.getElementById(`agregarRutina${ejercicios.id}`)
    agregarRutina.addEventListener("click", () => {
      agregarModal(ejercicios)
      console.log("se agrego")
    })
  }
  

}
//funcion para agregar ejercicios al modal
function agregarModal(ejercicios){
  let ejercicioAgregado = ejercicioCreado.find((elem)=>elem.id == ejercicios.id)

  if(ejercicioAgregado == undefined){
    ejercicioCreado.push(ejercicios)
    localStorage.setItem("rutinaCreada", JSON.stringify(ejercicioCreado))

  }else{

  }
}
//cargamos los datos al modal
function cargarEjercicioCreado(array){
  rutinaModalBody.innerHTML = ``
  array.forEach((ejerciCreado) => { 
    rutinaModalBody.innerHTML +=`<div id="ejerciCreado${ejerciCreado.id}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Ejercicio</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${ejerciCreado.nombreEjer}</h6>
      <p class="card-text">Repeticiones/tiempo: ${ejerciCreado.repet}.</p>
      <button class="btn btn-danger" id="botonEliminar${ejerciCreado.id}"><i class="fas fa-trash-alt"></i></button>
      
    </div>
  </div>`
  })
  //foreach para eliminar del modal
  array.forEach((ejerciCreado) => {
    document.getElementById(`botonEliminar${ejerciCreado.id}`).addEventListener("click", () => {
      let moduloEjercicio = document.getElementById(`ejerciCreado${ejerciCreado.id}`)
      moduloEjercicio.remove ()
      let ejercicioEliminar = array.find((ejercicios) => ejercicios.id == ejerciCreado.id)
      let posicion = array.indexOf(ejercicioEliminar)
      array.splice(posicion, 1)
      localStorage.setItem("rutinaCreada", JSON.stringify(array))
    })
  })
}
//funcion para vaciar todo el array rutinaCrada
function vaciarArray(array){
  array = []
  rutinaModalBody.innerHTML = ""
  localStorage.setItem("rutinaCreada", JSON.stringify(array))
}
// crear function mostrar formulario
function iniciarFormulario(){
    //resetear el DOM
    formularioDiv.innerHTML = ``
    
       let nuevoFormularioDiv = document.createElement("div")
       //agregar class
      
       nuevoFormularioDiv.innerHTML = `<div class="col-md-6">
       <label for="input" class="form-label">Nombre Ejercicio</label>
       <input type="text" class="form-control" id="nomEjer">
     </div>
     <div class="col-md-6">
       <label for="input" class="form-label">Repeticiones/tiempo</label>
       <input type="text" class="form-control" id="repEjer">
     </div>
     <div class="col-md-6">
       <label for="inputState" class="form-label">Tipo de ejercicio</label>
       <select id="inputState" class="form-select">
         <option selected>Tipo de ejercicio</option>
         <option value="1">Definición</option>
         <option value="2">Ganar masa muscular</option>
         <option value="3">Resistencia</option>
       </select>
     </div>
     <div class="col-md-6">
       <label for="input" class="form-label">Dia del ejeccio</label>
       <input type="text" class="form-control" id="tipoDia" placeholder="lunes...">
     </div>
     <button type="text" class="btn btn-primary" id="guardarBtn">Guardar</button>
     <hr>`
       formularioDiv.appendChild(nuevoFormularioDiv)
       let guardarBtn = document.getElementById("guardarBtn")
       guardarBtn.addEventListener("click", function(event){
  
        event.preventDefault()
        
        agregarEjer(rutina)
      })

 
 }
 function cartelH3(){
  alertaCartel.innerHTML = ""
  let nuevoCartel = document.createElement("h3")
  nuevoCartel.innerHTML = `<h3 id="h3Cartel">No hay ejercicios Disponibles</h3>`
  alertaCartel.appendChild(nuevoCartel)
  
}
//EVENTOS

vaciar.addEventListener("click", () => {
  vaciarArray()
  console.log("vacia el array")
})

 mostrarFormulario.addEventListener("click", () => {
    iniciarFormulario()   
 })

 ocultarFormulario.onclick = () => {
    //reiniciando el div
    formularioDiv.innerHTML = ``
 }

rutinaBtn.addEventListener("click", () => {
  ejerciciosDiv.innerHTML=``
  alertaCartel.innerHTML = ``
    console.log(showRutina.value)
    switch(showRutina.value){
       case "1":
          console.log("primera opccion")
          planEntre()
       break
       case "2":
        console.log("segunda opccion")
        planEntre()
       break
       case "3":
        console.log("tercera opccion")
        planEntre()
       break
       default:
          console.log("no selecciono nada")
       break
    }
    
 }
 )
 reiniciarBtn.addEventListener("click", () => {
  ejerciciosDiv.innerHTML=``
  alertaCartel.innerHTML = ``
  

 })
 crearRutinaBtn.addEventListener("click", () => {
  mostrarEjer(rutina)
 })

 showRCreada.addEventListener("click", () => {
  cargarEjercicioCreado(ejercicioCreado)
 })

 