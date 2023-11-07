//Change the prototype to a new object 

//add the property numLegs and two methods eat() and describe() to the prototype of dog by setting the prototype to a new object

function dog(name) {
    this.name = name;
}

dog.prototype = {
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    } ,
    describe: function() {
        console.log("My name is " + this.name);
    }
}

console.log(new dog("zammy").describe());