//clase constructotra
class ejercicios{
    constructor (id, nombreEjer, repet, tipo){
        this.id = id,
        this.nombreEjer = nombreEjer,
        this.repet = repet,
        this.tipo = tipo
    }

mostrarInfoEjercicios(){
    console.log(`el ejercicio es ${this.nombreEjer} cantidad de repeticiones ${this.repet} tipo de ejercicio ${this.tipo}`)
}

}

const ejercicio1 = new ejercicios(1, "pecho banco plano", 15, 1)
const ejercicio2 = new ejercicios(2, "pecho banco inclinado", 12, 1)
const ejercicio3 = new ejercicios(3, "pull up", 8, 2)
const ejercicio4 = new ejercicios(4, "cinta", 15, 3)
//crando un array de objetos
const rutina = []
rutina.push(ejercicio1, ejercicio2, ejercicio3, ejercicio4)

// console.log(rutina)

// funcion para calcular indece de masa muscular
function imc(){
    let peso = prompt(`Ingrese su peso en KG`)
    let estatura = prompt(`Ingrese su estatura en metros ejemplo "1.70m"`)
    let edad = prompt(`Ingrese su edad`)
    let genero = prompt(`Ingrese genero, M o F`)
    let formulaImc = peso / (estatura * estatura)
    let formulaMaculino
    let formulaFemenino
    if(genero.toUpperCase() == "M"){
        formulaMaculino = (1.20 * formulaImc) + (0.23 * edad) - (10.8 * 1) - 5.4
        alert(`su masa muscular es ${formulaMaculino}%`)
    } else if( genero.toUpperCase () == "F"){
       formulaFemenino = (1.20 * formulaImc) + (0.23 * edad) - (10.8 * 2) - 5.4
         alert(`su masa muscular es ${formulaFemenino}%`)
    }else{
        alert("Ingrese un genero valido M/F")
    }
    
}
// funcion para peso ideal
function pesoIdeal(){
    let peso = prompt(`Ingrese su peso en KG`)
    let estatura = prompt(`Ingrese su estatura en Cm`)
    let edad = prompt(`Ingrese su edad`) 
    let pesoI = estatura - 100 + ((edad/10) * 0.9)
    alert(`Su peso ideal debe esta en ${pesoI}KG.`)
}
// funcion para consumo de proteinas diarias
function proteinaDiaria (){
    let peso = prompt(`Ingrese su peso en KG`)
    let proteinaDia = 0.8 * peso
    alert(`Usted debe comer ${proteinaDia} gramos de proteina por dia`)
}

//funcion para mostrar los ejercicios
function mostrarEjer(array){
    console.log("la rutina disponible para hoy es:")
    alert("el resultado se muestra en consola")
    for(let ejercicios of array){
        console.log(`-${ejercicios.nombreEjer}, repeticiones/minutos ${ejercicios.repet}`)
       
    }


}
//funciones para filtrar
// function filEjerDef(array){
//     let ejerDef = "definicion"
//     let fil = array.filter(
//         (ejercicios) => ejercicios.tipo == ejerDef
//     )
//     if(array.length == 0){
//         alert(`no hay ejercicios disponibles`)
//      }else{
        
//         console.log(mostrarEjer(fil))
//      }
// }
// function filEjerMasa(array){
//     let ejerMasa = tipoRutina
//     let fil = array.filter(
//         (ejercicios) => ejercicios.tipo == ejerMasa
//     )
//     if(array.length == 0){
//         alert(`no hay ejercicios disponibles`)
//      }else{
        
//         console.log(mostrarEjer(fil))
//      }
// }
// function filEjerResis(array){
//     let ejerResis = "resistencia"
//     let fil = array.filter(
//         (ejercicios) => ejercicios.tipo == ejerResis
//     )
//     if(array.length == 0){
//         alert(`no hay ejercicios disponibles`)
//      }else{
        
//         console.log(mostrarEjer(fil))
//      }
// }
// console.log(filEjerDef(rutina))
//funcion para simular planes de entrenamiento
function planEntre(){
    let tipoRutina = parseInt(prompt(`Ingrese su objetivo 
    1 - Definición
    2 - Ganar Masa Muscular
    3 - Resistencia`))
    //funcion para filtrar segun el tipo de rutina que elija el usuario
    function filEjer(array){
        let ejertipo = tipoRutina
        let fil = array.filter(
            (ejercicios) => ejercicios.tipo == ejertipo
        )
        if(array.length == 0){
            alert(`no hay ejercicios disponibles`)
         }else{
            
            console.log(mostrarEjer(fil))
         }
    }
    if(tipoRutina == 1){
        filEjer(rutina)
        
    }else if( tipoRutina ==2){
        filEjer(rutina)
        
    }else if( tipoRutina == 3){
       filEjer(rutina)
    }else{

    }
}
//funcion para agregar un objeto al array
function agregarEjer(){
    let nomEjer = prompt("Ingrese el nombre del ejercicio")
    let repEjer = parseInt(prompt("Ingrese la cantodad de repeticiones o tiempo"))
    let tipoEjer = parseInt(prompt(`Ingrese el tipo de Ejercicio 
    1- Definición 
    2- Ganar masa muscular
    3- Resistencia`))
    const ejerNuevo = new ejercicios(rutina.length+1, nomEjer, repEjer, tipoEjer)
    rutina.push(ejerNuevo)
}

// menu
function menu(){

    let salirMenu = false
    
    do{
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 - Calcular IMC
        2 - Calcular peso ideal
        3 - Calcular cantidad de proteina al dia
        4 - Simular plan de entrenamiento
        5 - Agregar ejercicio
        0 - salir del menu`))
    
        switch(opcionIngresada){
            case 1:
               imc()
            break
            case 2:
                pesoIdeal()
            break
            case 3:
                proteinaDiaria()
            break  
            case 4:
                planEntre()
            break
            case 5:
                agregarEjer()
            break  
            case 0:
                alert(`Hasta la proxima, Saludos`)
                salirMenu = true
            break
        }
    }while(!salirMenu)
}
menu()