const chamanderData = {
  name: "Chamander",
  image: require("./assets/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock"],
};
const squirtleData = {
  name: "Squirtle",
  image: require("./assets/squirtle.png"),
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};
const bulbasaurData = {
  name: "Bulbasaur",
  image: require("./assets/bulbasaur.png"),
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whipe", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flaying", "Psychic"],
};
const pikatchuData = {
  name: "Pikatchu",
  image: require("./assets/pikachu.png"),
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whipe", "Growl"],
  weaknesses: ["Ground"],
};
export const data = [chamanderData, squirtleData, bulbasaurData, pikatchuData];
