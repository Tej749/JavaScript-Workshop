/* 
Looping over an Array:
    Print all element of an array
    loops - iterablae (string, object, array)
    foor loops:
*/

let heroes = ["batman", "hulk", "hitman", "superman", "Nagraj"];
// for (let idx = 1; idx < heroes.length; idx++) {
//   console.log(heroes[idx]);
// }

// let score = [34, 56, 12, 34, 23, 90];
// for (let i = 0; i < score.length; i++) {
//   console.log(score[i]);
// }

// for of
for (let hero of heroes) {
  console.log(hero);
}

let cities = ["nepalgunj", "kohalpur", "kathmandu", "surkhet"];
for (let city of cities) {
  console.log(city.toUpperCase());
}
