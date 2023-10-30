//Where do I Belong

//Return the lowest index at which a value (second argument) should inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns (arr, num){
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([40, 60], 50));

//code explanation

//first i sort the array using sort(callbackfunction) to sort it by lowest to highest, from left to right

//then i use a for loop to compare the itmens in the array starting from the smallest one. When an item on the array is greater tha the number we are comparing against, then we return
//the index