//Return longest numbers in arrays
 
function largestOfFour(arr){
    const results = [];
    for(let i = 0; i < arr.length; i++){
        let largestNumber = arr[i][0];
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] > largestNumber){
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }
    return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 357, 1]]));

//code explanation:
//create a variable to store the results as an array
//create an outer loop to iterate through the outer array
//create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won't be reassigned until we find a largernumber
//create said inner loop to work with the sub-arrays
//check if the element of the sub-array is larger than the currently stored largest number. If so, then update the number in the variable.
//after the inner loop, save the largest number in the corresponding position inside of the results array.
//and finaly return said array.