//clase constructotra
class ejercicios {
  constructor(id, nombreEjer, repet, tipo, dia) {
    this.id = id,
      this.nombreEjer = nombreEjer,
      this.repet = repet,
      this.tipo = tipo
    this.dia = dia
  }

  mostrarInfoEjercicios() {
    console.log(`el ejercicio es ${this.nombreEjer} cantidad de repeticiones ${this.repet} tipo de ejercicio ${this.tipo}`)
  }

}

const cargarEjercicios = async () => {
  const res = await fetch("ejercicios.json")
  const data = await res.json()

  for (let ejercicio of data) {
    let ejerciciosInfo = new ejercicios(ejercicio.id, ejercicio.nombreEjer, ejercicio.repet, ejercicio.tipo, ejercicio.dia)
    rutina.push(ejerciciosInfo)
  }
  localStorage.setItem("rutina", JSON.stringify(rutina))
}

//crando un array de objetos
let rutina = []
if (localStorage.getItem("rutina")) {

  rutina = JSON.parse(localStorage.getItem("rutina"))
} else {

  cargarEjercicios()
}
//array para modal de ejercicios
let ejercicioCreado

if (localStorage.getItem("rutinaCreada")) {
  ejercicioCreado = JSON.parse(localStorage.getItem("rutinaCreada"))
} else {
  ejercicioCreado = []
  localStorage.setItem("rutinaCreada", ejercicioCreado)
}


//funcion para simular planes de entrenamiento
function planEntre() {
  let tipoRutina = showRutina.value
  //funcion para filtrar segun el tipo de rutina que elija el usuario y el dia de la semana
  const fecha = Date();
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
  const nombreDia = dia[numeroDia];
  function filEjer(array) {
    let ejertipo = tipoRutina

    let fil = array.filter(
      (ejercicios) => ejercicios.tipo == ejertipo && ejercicios.dia == nombreDia
    )
    if (fil == 0) {

      cartelH3()

      console.log("no hay ejericios disponibles")
    } else {
      console.log("hola")
      mostrarEjer(fil)
    }
  }
  //condicional para filtral segun el tipo de ejercicio  
  if (tipoRutina == 1) {
    filEjer(rutina)

  } else if (tipoRutina == 2) {
    filEjer(rutina)

  } else if (tipoRutina == 3) {
    filEjer(rutina)
  } else {

  }
}

//funcion para agregar un objeto al array
function agregarEjer(array) {

  let nomEjer = document.getElementById("nomEjer")
  let repEjer = document.getElementById("repEjer")
  let tipoEjer = document.getElementById("inputState")
  let tipoDia = document.getElementById("tipoDia")

  const ejerNuevo = new ejercicios(rutina.length + 1, nomEjer.value, repEjer.value, tipoEjer.value, tipoDia.value)
  rutina.push(ejerNuevo)
  localStorage.setItem("rutina", JSON.stringify(array))

  nomEjer.value = ""
  repEjer.value = ""
  tipoEjer.value = ""
  tipoDia.value = ""
  //cartel para que el usuario sepa que se agrego el ejercicio
  Toastify(
    {
      text: `El ejercicio ${ejerNuevo.nombreEjer} se ha agregado corectamente`,
      duration: 2500,
      gravity: "top",//top o buttom,
      position: "center",//left, right o center
      style: {
        color: "gray",
        background: "#A0C49D"
      }
    }
  ).showToast()

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
let cartelDeCarga = document.getElementById("cartelDeCarga")
let loaderSpin = document.getElementById("loaderSpin")
let carterlSelct = document.getElementById("carterlSelct")

//funcion para mostrar los ejercicios
function mostrarEjer(rutina) {

  ejerciciosDiv.innerHTML = ``
  for (let ejercicios of rutina) {
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
function agregarModal(ejercicios) {
  let ejercicioAgregado = ejercicioCreado.find((elem) => elem.id == ejercicios.id)

  if (ejercicioAgregado == undefined) {
    ejercicioCreado.push(ejercicios)
    localStorage.setItem("rutinaCreada", JSON.stringify(ejercicioCreado))
    Swal.fire({
      title: `Rutina`,
      text: `Se ha agregado "${ejercicios.nombreEjer}" a la rutina`,
      icon: "success",
      confirmButtonColor: "#A0C49D",
      confirmButtonText: "Agregar mas",

    })

  } else {

    Swal.fire({
      title: `El elercicio "${ejercicios.nombreEjer}" ya exixte`,
      icon: "warning",
      confirmButtonColor: "#A0C49D",
      confirmButtonText: "Agregar uno diferente",

    })

  }
}
//cargamos los datos al modal
function cargarEjercicioCreado(array) {
  rutinaModalBody.innerHTML = ``
  array.forEach((ejerciCreado) => {
    rutinaModalBody.innerHTML += `<div id="ejerciCreado${ejerciCreado.id}" class="card" style="width: 18rem;">
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
      moduloEjercicio.remove()
      let ejercicioEliminar = array.find((ejercicios) => ejercicios.id == ejerciCreado.id)
      let posicion = array.indexOf(ejercicioEliminar)
      array.splice(posicion, 1)
      localStorage.setItem("rutinaCreada", JSON.stringify(array))
    })
  })
}
//funcion para vaciar todo el array rutinaCrada
function vaciarArray(array) {
  array = []
  rutinaModalBody.innerHTML = ""
  localStorage.setItem("rutinaCreada", JSON.stringify(array))
}
// crear function mostrar formulario
function iniciarFormulario() {
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
       <label for="input" class="form-label">Dia del ejercicio</label>
       <input type="text" class="form-control" id="tipoDia" placeholder="lunes...">
     </div>
     <button type="text" class="btn btn-primary" id="guardarBtn">Guardar</button>
     <hr>`
  formularioDiv.appendChild(nuevoFormularioDiv)
  let guardarBtn = document.getElementById("guardarBtn")
  guardarBtn.addEventListener("click", function (event) {

    event.preventDefault()

    agregarEjer(rutina)

  })


}
function cartelSel() {
  carterlSelct.innerHTML = ""
  let nuevoCartelSelct = document.createElement("h3")
  nuevoCartelSelct.innerHTML = `<h3 id="carterlSelct">Seleccione una opcion</h3>`
  carterlSelct.appendChild(nuevoCartelSelct)

}
function cartelH3() {
  alertaCartel.innerHTML = ""
  let nuevoCartel = document.createElement("h3")
  nuevoCartel.innerHTML = `<h3 id="h3Cartel">No hay ejercicios Disponibles</h3>`
  alertaCartel.appendChild(nuevoCartel)

}

function cartelSpinner() {
  cartelDeCarga.innerHTML = ""
  loaderSpin.innerHTML = ""
  let cartelCargado = document.createElement("h3")
  let loaderSpinner = document.createElement("div")
  cartelCargado.innerHTML = `<h3 id="loaderTexto" class="text-success text-center mb-3">Cargando Ejercicios...</h3>`
  loaderSpinner.innerHTML = `<div class="spinner-border text-success" role="status">
  <span class="visually-hidden"></span>
</div>`
  cartelDeCarga.appendChild(cartelCargado)
  loaderSpin.appendChild(loaderSpinner)

}
function finalizarRutina() {
  Swal.fire({
    title: 'Está seguro de finalizar la rutina',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Sí, seguro',
    cancelButtonText: 'No, Regresar',
    confirmButtonColor: 'green',
    cancelButtonColor: 'red',
  }).then((result) => {
    if (result.isConfirmed) {

      Swal.fire({
        title: 'Rutina finalizada',
        icon: 'success',
        confirmButtonColor: 'green',
        text: `Muchas gracias por crear la rutina en nuestra plataforma, agregue otra rutina cuando desee`,
      })

      ejercicioCreado = []
      localStorage.removeItem("rutinaCreada")
      vaciarArray()

    } else {
      Swal.fire({
        title: 'No ha finalizado la Rutina',
        icon: 'info',
        text: `Aun siguen los ejercicios cargados`,
        confirmButtonColor: 'green',
        timer: 3500
      })
    }
  })
}

//EVENTOS


vaciar.addEventListener("click", () => {
  // vaciarArray()
  finalizarRutina()
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
  ejerciciosDiv.innerHTML = ``
  alertaCartel.innerHTML = ``
  carterlSelct.innerHTML = ``
  console.log(showRutina.value)
  switch (showRutina.value) {
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
      cartelSel()
      console.log("no selecciono nada")
      break
  }

}
)
reiniciarBtn.addEventListener("click", () => {
  ejerciciosDiv.innerHTML = ``
  alertaCartel.innerHTML = ``
  loaderSpin.innerHTML = ``

})
crearRutinaBtn.addEventListener("click", () => {
  cartelSpinner()
  setTimeout(() => {
    loaderTexto.innerText = ``
    loaderSpin.innerHTML = ``
    mostrarEjer(rutina)
  }, 2000)

})

showRCreada.addEventListener("click", () => {
  cargarEjercicioCreado(ejercicioCreado)
})



