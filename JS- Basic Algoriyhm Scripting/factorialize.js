//factorialize a number

function factorialize(num) {
    let factorial = 1;
     for(let i = 2; i<=num; i++){
        factorial *= i;
     }
     return factorial;
}

console.log(factorialize(5));