const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchBtn.addEventListener("click", () => {
  if (searchInput.value === "Red") {
    alert("Pokémon not found");
  } else if (searchInput.value === "Pikachu") {
  
    pokemonName.textContent = "PIKACHU";
    pokemonId.textContent = "#25"; 
    weight.textContent = "Weight: 60";
    height.textContent = "Height: 4";
    hp.textContent = "35";
    attack.textContent = "55";
    defense.textContent = "40";
    specialAttack.textContent = "50";
    specialDefense.textContent = "50";
    speed.textContent = "90";
  }
});

