"use strict";

let a = prompt("ingrese 1 numero");
while (a != 0) {
  alert("el factorial del numero ingresado es: " + factorial(a));
  a = prompt("ingrese 1 numero(para salir ingrese 0(cero)");
}
console.log("fin del programa");

function factorial(n) {
  var total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}
