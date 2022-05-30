console.log("Archivo Iteracion dom funcionando OK");

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

console.log(document.querySelector ('.showme'));

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

console.log(document.querySelector ('#pillado'))

// 1.3 Usa querySelector para mostrar por consola todos los p

console.log(document.getElementsByTagName('p'));

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

console.log(document.querySelectorAll('.pokemon'))


// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".

const querySelector = document.querySelectorAll('[data-function="testMe"]')
console.log(querySelector);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(querySelector[2])



