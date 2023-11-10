//use prototype properties to reduce duplicate code

//add a numLegs property to the prototype of Dog

function dog(name) {
    this.name = name;
}

dog.prototype.numLegs = 4;

let beagle = new dog("zammy");

console.log(beagle.numLegs);
