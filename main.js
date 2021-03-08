
let lista2 = ["bebebeb","uuuu"];
let lista = ["miguel","adrian","diana","diego", lista2, "sergio","willmer","adrian","andres","emanuel","loza","andrea"];


// let resultado = lista.pop();
// let resultado = lista.push(100);
// let resultado = lista.shift();
let resultado = lista.unshift({nomre:"Profesor"});
// let resultado = lista.splice(5,1,"prueba");
// let resultado = lista.sort();
// let resultado = lista.reverse();
// let resultado = lista.join("-");
// let resultado = lista.concat(lista2);
// let resultado = lista.slice(1,4);
// let resultado = lista.some(data => data=="adrian");


console.log(`Lista original`);
console.log(lista);
console.log(`Lista afectada`);
console.log(resultado);

console.log("Lista Original");
console.log(lista);
console.log("Elemento afectado con método .pop");
console.log(resultado_Pop);
console.log(lista);

let resultado_Push = lista.push("Juan");
console.log("Elemento agregado con método .push");
console.log(resultado_Push);
console.log(lista);

let resultado_Shift = lista.shift();
console.log("Elemento afectado con método .shift");
console.log(resultado_Shift);
console.log(lista);

let resultado_Unshift = lista.unshift({nombre:"Pedro"});
console.log("Elemento afectado con método .unshift");
console.log(resultado_Unshift);
console.log(lista);

let resultado_Splice = lista.splice(3,1,{id:123456});
console.log("Elemento afectado con método .splice");
console.log(resultado_Splice);
console.log(lista);

let resultado_Sort = lista.sort((a,b) => console.log(a, b));
console.log("Elemento afectado con método .sort");
console.log(resultado_Sort);
console.log(lista);
