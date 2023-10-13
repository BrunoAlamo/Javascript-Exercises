//Interate through all an array's items using for loops

function greaterThanTen (arr)  {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(greaterThanTen ([2, 12, 8, 14, 80, 0, 1]));