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
        alert(`su masa muscular es ${formulaMaculino}`)
    } else if( genero.toUpperCase () == "F"){
       formulaFemenino = (1.20 * formulaImc) + (0.23 * edad) - (10.8 * 2) - 5.4
         alert(`su masa muscular es ${formulaFemenino}`)
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
    alert(`Su peso ideal debe esta en ${pesoI}`)
}
// funcion para consumo de proteinas diarias
function proteinaDiaria (){
    let peso = prompt(`Ingrese su peso en KG`)
    let proteinaDia = 0.8 * peso
    alert(`Usted debe comer ${proteinaDia} gramos de proteina por dia`)
}

// menu

let salirMenu = false

do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
    1 - Calcular IMC
    2 - Calcular peso ideal
    3 - Calcular cantidad de proteina al dia
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
        case 0:
            alert(`Hasta la proxima, Saludos`)
            salirMenu = true
        break
    }
}while(!salirMenu)