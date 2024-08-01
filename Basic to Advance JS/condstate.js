let game = "basketball";
let place;

if (game === "football") {
  place = "Football Ground from Nepalgunj";
} else if (game === "cricket") {
  place = "Cricket Ground at Kathmandu";
} else if (game === "swimming from China...") {
  place = "Swimming Pools";
} else if (game === "basketball") {
  place = "Basketball Court from America....";
} else {
  place = "Please choose appropriate game...";
}
console.log(place);
console.log("Exercise I --x------------------------------------------x---");

//Ternary Operators : conditions ? true output : false output

let age = 23;
let check =
  age >= 18
    ? console.log("Eligible to get Admission")
    : console.log("Sorry...!!");

// MDN Docs : Reading also very good habbits for the programmers
// Switch Statement
const expr = "papayas";
switch (expr) {
  case "Oranges":
    console.log("Orange are Rs. 150 per kg...");
    break;
  case "mangoes":
  case "papayas":
    console.log("Mangoes and papayas are rs. 250/- per 2 kg.");
    break;
  default:
    console.log("sorry, we are out of $(expr),");
}

console.log("-------------x---------x----------------");
