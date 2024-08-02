/* 
Array in JS:
    Collection of items

    let heroes = ['batman', 'hulk', 'hitman']
    let points = [45,23, 49, 83]
    let info = ['ram', '23', 'ktm']

    strings ; It's is immutable. 
    array : It;s is mutable.
*/

let marks = [34, 56, 76, 23, 90, 45];
let heroes = ["batman", "hulk", "hitman"];

console.log(marks);
console.log(marks[1]);
console.log(marks.length);
console.log(heroes);

/*
Array in JS:
    arr[0], arr[1], arr[2]...
    value stored in linear fashioned
*/
let fruit = ["banana", "guava", "grapes", "mango"];
console.log(fruit[3]);
fruit[1] = "Pineapple";
fruit[0] = 49;
console.log(fruit);
