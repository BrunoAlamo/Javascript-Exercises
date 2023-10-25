//truncate a string 

function truncateString(str, num){
    if(str.length > num){
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//code explanation
//We start off with a simple if statmenet to determine one of two outcomes...
//if our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our "..." to the end
//of the string
//However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string