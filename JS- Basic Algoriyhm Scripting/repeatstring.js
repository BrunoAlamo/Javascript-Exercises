//repeat a string repeat a string

function repeatStringNumTimes(str, num){
    let newString = "";
    for(let i=0; i<num; i++){
        newString += str;
    }
    return newString;
}

console.log(repeatStringNumTimes("abc", 3));