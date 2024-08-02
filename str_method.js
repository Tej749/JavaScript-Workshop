/*
String Method in JS :
    These are built-in function to manipulate a string.
    - str.toUpperCase() : convert string   to upper case
    - str.toLowerCase() : convert string to lower case.
    - str.trim() # remove whitspace.
    - str.slice(start, end) # return part of string
    - str1.concat(str2) # join strings
    - str.replace(searchVar, newVar)
    - str.charAt(idx)
*/
let village = "Radhapur";

// str.toUpperCase() : convert string   to upper case

console.log(village.toUpperCase());

// str.toLowerCase() : convert string to lower case.
console.log(village.toLowerCase());

let city = "Nepalgunj";
let copyCity = city.toLowerCase();
console.log("Original Variable = ", city);
console.log("Copy variable = ", copyCity);

//str.trim() # remove whitspace.
let song = " Michael  Learn to Rocks ";
console.log(song.trim());

console.log(song.slice(3, 8));

// concatenation method

let firstName = "Tej";
let lastName = "Thapa";
fullName = firstName.concat(" ", lastName);

console.log(fullName);
full = firstName + " " + lastName;
console.log(full);

// String Replace Method.

let music = "Bom Marley";
console.log(music.replace("B", "M"));
console.log(music.replace("Bom", "I"));

// str.charAt(idx)

let capital = "Kathmandu"
console.log(capital[0, 3])