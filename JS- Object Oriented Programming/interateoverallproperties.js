//Interate over all properties

//Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps

function dog(name) {
    this.name = name;
}
dog.prototype.numLegs = 4;

let beagle = new dog("snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);