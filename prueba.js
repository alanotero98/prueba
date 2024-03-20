function sockMerchant(n, ar) {
    // Write your code here
let newArray = [...ar];
let pares = 0;
for(let i = 0; i < n; i++){
    let j = i + 1;
    console.log("estamos viendo el valor de "+ newArray[i]+ " y de "+ newArray[j]+" y el valor de i es "+ i +" y el de j "+ j);
    let detector = 0;
        if(newArray[i] === newArray[j]){
            pares++;
            
            newArray.splice(j, 1)
            newArray.splice(i, 1);
           
            
        
    }

}
console.log('la cantidad de pares son ' + pares);
}

let arr = [10, 20, 20, 10, 10, 30, 50 ,10 ,20, 20];
sockMerchant(9, arr);
