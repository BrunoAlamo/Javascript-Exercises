function filtredArray (arr, elem){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i].indexOf(elem) === -1){    //checks every parameter for the element and if it is not there continues the code
            newArr.push(arr[i]); // insert the element of the array in the new filtred array
        }
    }
    return newArr;
}

console.log(filtredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2));

//the output is gonna give me an array with everything that does not have the element