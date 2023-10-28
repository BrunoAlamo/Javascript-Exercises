//Title case a sentence

//return the provided string with the first letter of each word capitalized

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for(let st in newTitle){
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

console.log(titleCase("bruno"));

//code explanation
//Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn the first character of the word to uppercase and the rest to lowercase
//By creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.