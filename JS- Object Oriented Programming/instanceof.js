//Verify an Object's constructor with instanceof

//Create a new instance of the house constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceOf to verify that it is an instance of House

function house (numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new house(3);
console.log(myHouse instanceof house);

