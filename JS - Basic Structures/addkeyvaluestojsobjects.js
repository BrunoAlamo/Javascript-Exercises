//add key-value pairs to JS objects

const tekkencharacter = {
    player: "hwoarang",
    fightingstyle: "taekwondo", 
    human: "true"
};

tekkencharacter.origin = 'south korea';
tekkencharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';
tekkencharacter[eyes] = 'brown';

console.log(tekkencharacter);