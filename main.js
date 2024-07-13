
/*//1 point//
let num1 = 6
let num2 = 4
let num3 = 1

if (num1 > num2) {
    console.log("El primer numero es mayor que el segundo.")
} else {
    console.log("El primer numero no es mayor que el segundo.")
}
//2 point//
if (num1 === num2) {
    console.log("Los numero son iguales.")
} else {
    console.log("Los numero son diferentes.")
}
//3 point//
if (num1 > num2) {
    console.log("El primer numero es mayor.")
} else if (num1 < num2) {
    console.log("El segundo numero es mayor.")
} else {
    console.log("Los numero son iguales.")
 }
//4 point//
if (num1 < num2 && num1 < num3) {
    console.log("El primer numero es el más chico.")
} else if (num2 < num1 && num2 < num3) {
    console.log("El segundo numero es el más chico.")
} else {
    console.log("El tercer numero es el más chico.")
}*/

/*//5 point//
let persona1 = { nombre: "jonathan", edad: 40, altura: 175 }
let persona2 = { nombre: "maria", edad: 30, altura: 165 }

if (persona1.altura > persona2.altura) {
    console.log(persona1.nombre + " es más alto.")
} else if (persona1.altura < persona2.altura) {
    console.log(persona2.nombre + " es más alto.")
} else {
    console.log("Ambos tienen la misma altura.")
}

if (persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mayor.")
} else if (persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mayor.")
} else {
    console.log("Ambos tienen la misma edad.")
}*/



/*//6 point//

let nombre = prompt("Ingrese su nombre:")
let edad = parseInt(prompt("Ingrese su edad:"))
let altura = parseInt(prompt("Ingrese su altura en cm:"))
let vision = parseFloat(prompt("Ingrese su visión de 0 a 10:"))

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log("Estás capacitado para conducir.")
} else {
    console.log("No estás capacitado para conducir.")
}*/

//7 point//

/*let nombre1 = prompt("Ingrese su nombre:")
let pase = prompt("Ingrese su tipo de pase (vip o normal):")
let tieneEntrada = prompt("¿Posee entrada? (si o no, s o n, true o false):")

if (nombre1 === "TuNombre" || pase === "vip") {
    console.log("Bienvenido.")
} else if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
    console.log("Bienvenido.")
} else {
    let deseaComprar = prompt("¿Desea comprar una entrada? (si o no):")
    if (deseaComprar === "si") {
        let dineroDisponible = prompt("Ingrese el dinero disponible:")
        if (dineroDisponible >= 1000) {
            console.log("Venta de entrada exitosa. Bienvenido.")
        } else {
            console.log("No tiene suficiente dinero para comprar una entrada.")
        }
    } else {
        console.log("Hasta luego.")
    }
}*/

/*//8 point //

let numeroIncognita = (5) + 2;
let intentos = 3

while (intentos > 0) {
    let numeroIngresado = parseInt(prompt("Adivina el numero entre 1 y 10:"))
    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, haz adivinado el numero!")
        break;
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El numero ingresado es mayor, vuelve a intentarlo.")
    } else {
        console.log("El numero ingresado es menor, vuelve a intentarlo.")
    }
    intentos--;
    if (intentos === 0) {
        console.log("Lo siento, has perdido. El numero era " + numeroIncognita)
    }
}
*/
//9 point//

/*let edad = parseInt(prompt("Ingrese su edad:"))

if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.")
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.")
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.")
} else if (edad > 45) {
    console.log("Eres un anciano.")
}39
if (edad > 100) {
    console.log("¿En realidad tienes esa edad?")
}*/

/*//10 point//

let jugador1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS:")
let jugador2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS:")

if (jugador1 === jugador2) {
    console.log("Empate.")
} else if ((jugador1 === "PIEDRA" && jugador2 === "TIJERAS") || (jugador1 === "PAPEL" && jugador2 === "PIEDRA") || (jugador1 === "TIJERAS" && jugador2 === "PAPEL")) {
    console.log("Jugador 1 gana.")
} else if ((jugador2 === "PIEDRA" && jugador1 === "TIJERAS") || (jugador2 === "PAPEL" && jugador1 === "PIEDRA") || (jugador2 === "TIJERAS" && jugador1 === "PAPEL")) {
    console.log("Jugador 2 gana.")
} else {
    console.log("Uno de los jugadores ha hecho trampa.");
}
*/
/*//11 point//

let color = prompt("Ingrese un color:")

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.")
        break
    case "verde":
        console.log("El color de la naturaleza.")
        break
    case "azul":
        console.log("El color del agua.")
        break
    case "amarillo":
        console.log("El color del sol.")
        break
    case "rojo":
        console.log("El color del fuego.")
        break
    case "marrón":
        console.log("El color de la tierra.")
        break
    default:
        console.log("Excelente elección, no lo teníamos pensado.")
        break
}
*/
/*//12point//

let valor1 = (prompt("Ingrese el primer valor:"));
let valor2 = (prompt("Ingrese el segundo valor:"));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división):")

switch (operacion) {
    case "suma":
        console.log("Resultado: " + (valor1 + valor2))
        break
    case "resta":
        console.log("Resultado: " + (valor1 - valor2))
        break
    case "multiplicación":
        console.log("Resultado: " + (valor1 * valor2))
        break
    case "división":
        if (valor2 !== 0) {
            console.log("Resultado: " + (valor1 / valor2))
        } else {
            console.log("ERROR: No se puede dividir por cero.")
        }
        break
    default:
        console.log("Operación no reconocida.")
}*/

//13point//

let documenNacional = {
nombre: prompt("Ingrese su nombre:"),
apellido: prompt("Ingrese su apellido:"),
numeroDeIdentificacion: prompt ("Ingres su numero de documento:"),
fechaDeNacimiento: prompt("Ingrese fecha de nacimiento:"),
lugarDeNacimento: prompt("Ingrese lugar de nacimiento:")
}
console.log(documenNacional)
if (confirm("¿Los datos estan correctos?")){
    console.table(ocumenNacional)
    console.log("Registro exitoso.")
}
else{
    console.log("Vuelva a intertarlo en un mes.")
}