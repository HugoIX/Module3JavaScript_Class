// console.log("Hola Mundo")

// let lastName = "Henao";

// const PI = 3.1416;

// console.log(lastName);

// lastName = "Henao";

// lastName = 10;

// console.log(lastName);

// console.log(PI);

// let fruits = ["manzana", "pera", "mango"]

// let persona = {
//     nombre : "Ana",
//     edad : 28,
//     ciudad : "Bogotá"
// };

// console.log(typeof fruits)

// console.log(fruits[2])

// console.log(persona.ciudad)

// function saludar() {
//     console.log("Hola, bien o no? ");
// }
// saludar()

// function sumar(a,b) {
//     let result ;
//     result = a + b;
//     console.log(result);
// };

// const sumar2 = (a, b) => {return a + b}

// let response = sumar2(4,8)

// console.log(response)

// sumar2(4,8)

// sumar2(4,2)

// sumar2("hola", " como estás?")


// const obtenerFechaActual = () => {
//     return new Date();
// }

// let date = obtenerFechaActual()

// console.log(date)

// let num = prompt("Ingrese un número: ")
// let num2 = prompt("Ingrese otro número: ")

// let suma = sumar2(+num, +num2)

// alert(`la suma es ${suma}`)

// let nombre = prompt("Cual es tu nombre?")
// let edad = prompt("Cual es tu edad?")
// let ciudad = prompt("Cual es tu ciudad?")


// if (edad >= 18) {
//     alert (`Genial ${nombre}, ${ciudad} es una ciudad muy agradable siendo mayor de edad`)
// }

// else {
//     alert (`Genial ${nombre}, ${ciudad} es una ciudad muy agradable siendo menor de edad`)
// }

// let edad = prompt("Ingresa tu año de nacimiento");
// let message = "";
// let fechaActual = new Date().getFullYear();
// let result = fechaActual - edad;

// if (result >= 18) {
//     message = "Eres mayor de edad."
// }
// else {
//     message = "Eres menor de edad."
// }

// alert(`Tu edad es: ${result}. ${message}`)

// let result;

// const sumar = (num1, num2 = 5) => {
//     console.log("Esto sirve para sumar")
// //     return num1 + num2
//     return `El resultado es ${num1 + num2}`
// }
// // result = sumar(2)

// // console.log(result)

// result = sumar(100)

// console.log(sumar(200))

// (function(){
//     console.log("Se imprime la funcion autoejecutable")
// }()
// )

// let stateUser = "active";
// let msn;

// if (stateUser == "active"){
//     msn = "El usuario puede ingresar";
// }
// else if (stateUser == "noActive") {
//     msn = "El usuario no puede ingresar";
// }
// else if (stateUser == "delete") {
//     msn = "El usuario se retiró";
// }
// else {
//     msn = "El usuario no tiene estado"
// }

// switch(stateUser){
//     case "active":
//         msn = "El usuario puede ingresar"
//         break

//     case "noActive":
//         msn = "El usuario no puede ingresar"
//         break

//     case "delete":
//         msn = "El usuario se retiró"
//         console.log(2 + 2)
//         console.log(msn)
//         break

//     default:
//         msn = "El usuario no tiene estado"
//         break
// }

// console.log(msn)



// const btnValidar = document.getElementById("btn-validar")

// btnValidar.addEventListener("click", function () {
//     const nota1 = Number(document.getElementById("nota1").value);
//     const nota2 = Number(document.getElementById("nota2").value);
//     const nota3 = Number(document.getElementById("nota3").value);
//     const nota4 = Number(document.getElementById("nota4").value);
//     const nota5 = Number(document.getElementById("nota5").value);

//     const mensaje = document.getElementById("resultado-notas");

//     if (document.getElementById("nota1").value === "" ||
//         document.getElementById("nota2").value === "" ||
//         document.getElementById("nota3").value === "" ||
//         document.getElementById("nota4").value === "" ||
//         document.getElementById("nota5").value === "") {

//         mensaje.innerText = "Por favor todas las notas antes de continuar.";
//         document.body.style.backgroundColor = "red";
//         mensaje.style.color = "white";
//         return;
//     }

//     let resultado = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

//     if (resultado >= 3.0) {

//         mensaje.innerText = `Felicitaciones Has aprobado, tu nota es ${resultado.toFixed(2)}`
//         document.body.style.backgroundColor = "green";
//         mensaje.style.color = "white";

//         if (resultado === 3.0 ) {

//             mensaje.innerText += `Cuidado su nota es ${resultado.toFixed(2)}! Debes mejorar y estudiar más `;
//             document.body.style.backgroundColor = "orange";
//             mensaje.style.color = "black";

//         }

//     }
//     else {
//         mensaje.innerText = `Has reprobado, tu nota es ${resultado.toFixed(2)}. Estudia más para la próxima.`
//         document.body.style.backgroundColor = "red";
//         mensaje.style.color = "white";
//     }

// })

// for (let i = 0; i < 10; i ++) {

//     console.log(i)

// }

// const fruits = ["manzana", "pera", "piña", "mora", "mango", "melocoton"];
// for (let i = 0; i < fruits.length; i++) {

//     console.log(`La fruta es ${fruits[i]}`)

// }

// let contador = 0;
// while (contador < 5) {
//     console.log(contador)
//     contador++;
// }

// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num <5);

// for (let fruta of fruits) {
//     console. log(`Me gusta la ${fruits[2]}`)
// }

// fruits.push("papaya")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// fruits.unshift("fresa")
// console.log(fruits)

// console.log(fruits.indexOf("piña"))

// let fresaExist;
// let uvaExist;

// fresaExist = fruits.includes("fresa");
// uvaExist = fruits.includes("uva");

// if (fresaExist) {
//     console.log("si hay fresa")
// }

// let userAllowed;

// // let isActive = true;
// let isActive = "Está Activo";

// let major18 = false;

// userAllowed = isActive || major18

// console.log(userAllowed)

// let flag = false; 
// let isActive;

// isActive = flag && "Está activo";

// console.log(isActive)




