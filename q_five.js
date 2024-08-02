/*
Q. For a given array with prices of 5 items -> [250, 646, 300, 900, 50]
All items have an offer of 10 % off on them. Change the array to store 
final price after applying offer.
*/
let items = [250, 646, 300, 900, 50];

let idx = 0;
for (let value of items) {
  //   console.log(`The value of ${idx} is ${value}`);
  let offer = value / 10;
  items[idx] = items[idx] - offer;
  console.log(`Value after offer = ${items[idx]} `);
  idx++;
}
console.log(items);

/*
Q.2 Create an array to store companies 'Bloomberg', "Mircrosof", "Uber", "Google",
    "IBM", "Netflix".
    a. Remove the first company from the array
    b. Remove Uber & Add Ola in its place.
    c. Add Amazon at the end 
*/
let companies = ["Bloomberg", "Mircrosof", "Uber", "Google", "Netflix"];
// Remove first Compnay "Bloomberg"
console.log(companies.shift());
console.log(companies);

// Remove Uber & Add Ola
console.log(companies.splice(1, 2, "Ola"));
console.log(companies);

// Add Amazon at the end.
console.log(companies.push("Amazon"));
console.log(companies);
