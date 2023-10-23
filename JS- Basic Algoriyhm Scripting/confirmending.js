//confirm the ending

function confirmEnding(str, target){
    return str.slice(-target.length) === target;
}

console.log(confirmEnding("bastian", "n"));

//if a negative number is provides as the first parameter to splice(), the offset is taken backwards from the end of the string.