//Diff Two Arrays

function diffArray(arr1, arr2) {
    const newArray = [];

    function onlyInFirst(first, second) {
        for(let i = 0; i < first.length; i++) { // Looping through an array to find elements that don't exist in another array
           if(second.indexOf(first[i]) === -1){
              newArray.push(first[i]); // Pushing the elements unique to first to newArr
           }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArray;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));