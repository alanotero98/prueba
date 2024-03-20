function staircase(n) {
    // Write your code here
    function crearArray(numElementos) {
    return Array.from({ length: numElementos });
}
let array = crearArray(n)
    
   let escalera = [];
   let espacio = ' ';
   
    for(let i = 0; i < array.length; i++){
        
         let escalon = espacio.repeat(array.length - i - 1 )+ '|'.repeat(i + 1);
    escalera.push(escalon);
    }
    
    escalera.forEach(function(fila) {
    console.log(fila);
});
}
staircase(10)

