//Finders Keepers

function findElement (arr, func){
    let num = 0;

    for (let i = 0; i<arr.length; i++){
        num = arr[i];
        if(func(num)){
            return num;
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 11], function(num){return num % 2 === 0;}));


//code explanation:
//challenge asks us to look through array. This is done using a for loop.
//The num variable is being passed into the funciton, so we set it to each index in our array
//The predefined function already checks each number for us, so if it is "true", we return that num.
//if none of the numbers in the array pass the function's test, we return undefined.