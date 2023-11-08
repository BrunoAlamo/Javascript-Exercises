//Add the own properties of canary to the array ownProps

function bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new bird("tweety");
let ownProps = [];

for(let property in canary) {
    if(canary.hasOwnProperty(property)){
        ownProps.push(property);
    }
}

console.log(canary);