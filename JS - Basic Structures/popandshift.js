//Remove items from an array with pop() and shift()

function popShift(arr){
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challlenge', 'is', 'not', 'complete']));