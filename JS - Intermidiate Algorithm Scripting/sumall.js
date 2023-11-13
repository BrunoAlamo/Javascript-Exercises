//Sum All Numbers in a Range

function sumAll(arr) {
    if(arr[0] > arr[1]){  //if the highest number is on the left, sort the array
        arr.sort((a, b) => a - b);
    }
     
    let sum = 0 //initialize a variable that will be holding the sum

    for(let i = arr[0]; i <= arr[1]; i++){ // Loop over the range
       sum += i;
    } 
    return sum //return result
}

console.log(sumAll([4, 1]));