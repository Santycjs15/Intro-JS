//pregunta 1
function contarStringsLargos(lista) {
    let palabras = [];
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 25) {
            palabras.push(lista[i]);
        }
    }
    
    return palabras;
}
console.log((contarStringsLargos(["hola", "adios", "hola mundo", "adios mundo", "hola mundo cruelasasdadasdasdasdadassdasdasdasd"])));// 2

//pregunta 2
function exponenciacion(base, exponente){
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado
}
console.log(exponenciacion(5, 5));

//pregunta 3

function ocurrencias(numero){
    contador = 0;
    lista = [1, 4, 4, 4, 5, 6, 7, 8, 9, 10]
    for(let i = 0; i < lista.length; i++){
        if(numero == lista[i]){
            contador++
        }
    }
    return contador
}
console.log(ocurrencias(1));

//pregunta 4

function fibonacci(n){
    let a = 0, b = 1, c = 0;
    for(let i = 0; i < n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c
}
console.log(fibonacci(8));


