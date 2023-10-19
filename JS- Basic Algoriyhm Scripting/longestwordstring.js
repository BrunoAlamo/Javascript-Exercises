// Find the longest word in a string

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for(let i = 0; i < words.length; i++){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//code explanation: Take the string and convert into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.
//then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the
//variable maxLength.