//Extend Constructors to recieve arguments

//Create another dog constructor. This time, set it up tp take parameters name and color, and have the property numLegs fixed at 4. Then create a mew dog saved in a variable terrier.
//Pass it two strings as arguments for the name and color properties.

function dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new dog("zammy", "black and white");

console.log(terrier);