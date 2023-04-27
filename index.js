const primeiroNumero = Number(prompt("digite um númeor"))
const segundoNumero = Number(prompt("digite outro número"))

console.log("o primeiro número é maior que o segundo?" , 
primeiroNumero > segundoNumero)
console.log("o primeior número é igual ao segundo?" , 
primeiroNumero === segundoNumero)
console.log("o primeiro número é divisivel pelo segundo?" , 
primeiroNumero % segundoNumero === 0)
console.log("o segundo número é divisivel pelo primeiro?" , 
segundoNumero % primeiroNumero === 0)